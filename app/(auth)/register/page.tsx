"use client"

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Loader2, UserPlus, Facebook, Shield } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { useAuth } from "@/lib/contexts/AuthContext"
import { toast } from 'sonner'

export default function SignUpPage() {
  const { user, register, loginWithOAuth } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isAdmin = searchParams.get('role') === 'admin'

  // Redirect if user is already logged in
  React.useEffect(() => {
    if (user) {
      const redirectPath = user.role === 'admin' ? '/admin/dashboard' : '/dashboard'
      router.replace(redirectPath)
    }
  }, [user, router])

  const [isLoading, setIsLoading] = React.useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false)
  const [isFacebookLoading, setIsFacebookLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = React.useState("")

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
      if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    
    try {
      await register(formData.username, formData.email, formData.password, isAdmin)
      // Redirect to OTP verification page
      router.push(`/verify-otp?email=${encodeURIComponent(formData.email)}${isAdmin ? '&role=admin' : ''}`)
      toast.success("Registration successful! Please check your email for verification code.")
    } catch (error: any) {
      setError(error.message || "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }, [formData, register, router, isAdmin])

  const handleGoogleLogin = React.useCallback(async () => {
    setIsGoogleLoading(true)
    try {
      loginWithOAuth('google', isAdmin)
    } catch (error: any) {
      setError(error.message || "Failed to login with Google")
      setIsGoogleLoading(false)
    }
  }, [loginWithOAuth, isAdmin])

  const handleFacebookLogin = React.useCallback(async () => {
    setIsFacebookLoading(true)
    try {
      loginWithOAuth('facebook', isAdmin)
    } catch (error: any) {
      setError(error.message || "Failed to login with Facebook")
      setIsFacebookLoading(false)
    }
  }, [loginWithOAuth, isAdmin])

  return (
    <div className="flex w-full justify-center items-center min-h-screen py-8 px-4 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="w-full border border-gray-800 max-w-md p-6 md:p-8 pb-12 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-blue-900/10">
        <div className="text-center py-4 space-y-2">
          <h1 className="text-4xl font-extrabold">NGO Platform</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isAdmin ? "Create Admin Account" : "Create a new account"}
          </p>
        </div>

        {/* Role selector */}
        <div className="flex justify-center gap-4">
          <Button
            variant={!isAdmin ? "default" : "outline"}
            onClick={() => router.push('/register')}
            className="flex-1"
          >
            User
          </Button>
          <Button
            variant={isAdmin ? "default" : "outline"}
            onClick={() => router.push('/register?role=admin')}
            className="flex-1"
          >
            <Shield className="mr-2 h-4 w-4" />
            Admin
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Username
            </label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Choose a username"
              className="placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Confirm Password
            </label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800"
              required
            />
          </div>          <Button
            type="submit"
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <UserPlus className="mr-2 h-4 w-4" />
            )}
            Create Account
          </Button>

          {!isAdmin && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-50 dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleLogin}
                  disabled={isGoogleLoading}
                  className="w-full dark:bg-gray-800"
                >
                  {isGoogleLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <FcGoogle className="mr-2 h-4 w-4" />
                  )}
                  Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleFacebookLogin}
                  disabled={isFacebookLoading}
                  className="w-full dark:bg-gray-800"
                >
                  {isFacebookLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                  )}
                  Facebook
                </Button>
              </div>
            </>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
