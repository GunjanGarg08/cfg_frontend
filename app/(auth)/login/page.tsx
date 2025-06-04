'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Loader2, LogIn, Facebook, Shield } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { useAuth } from "@/lib/contexts/AuthContext"
import { toast } from "sonner"

export default function Page(): React.JSX.Element {
  const { login, loginWithOAuth } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isAdmin = searchParams.get('role') === 'admin'
  const [isPending, startTransition] = React.useTransition()
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(async () => {
      try {
        await login(formData.email, formData.password, isAdmin)
        toast.success("Login successful")
        // Redirect to appropriate dashboard
        router.push(isAdmin ? "/admin/dashboard" : "/dashboard")
      } catch (error: any) {
        toast.error(error.message || "Failed to login")
      }
    })
  }, [formData, login, router, isAdmin, startTransition])

  const handleGoogleLogin = React.useCallback(() => {
    startTransition(() => {
      try {
        loginWithOAuth('google', isAdmin)
      } catch (error: any) {
        toast.error(error.message || "Failed to login with Google")
      }
    })
  }, [loginWithOAuth, isAdmin, startTransition])

  const handleFacebookLogin = React.useCallback(() => {
    startTransition(() => {
      try {
        loginWithOAuth('facebook', isAdmin)
      } catch (error: any) {
        toast.error(error.message || "Failed to login with Facebook")
      }
    })
  }, [loginWithOAuth, isAdmin, startTransition])

  return (
    <div className="flex w-full justify-center items-center min-h-screen py-8 px-4 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="w-full max-w-md p-6 md:p-8 pb-12 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-blue-900/10">
        <div className="text-center py-4 space-y-2">
          <h1 className="text-4xl font-extrabold">NGO Platform</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isAdmin ? "Admin Sign In" : "Sign in to your account"}
          </p>
        </div>

        {/* Role selector */}
        <div className="flex justify-center gap-4">
          <Button
            variant={!isAdmin ? "default" : "outline"}
            onClick={() => router.push('/login')}
            className="flex-1"
          >
            User
          </Button>
          <Button
            variant={isAdmin ? "default" : "outline"}
            onClick={() => router.push('/login?role=admin')}
            className="flex-1"
          >
            <Shield className="mr-2 h-4 w-4" />
            Admin
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email or username"
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
              placeholder="Enter your password"
              className="placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="mr-2 h-4 w-4" />
            )}
            Sign In
          </Button>

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
              disabled={isPending}
              className="w-full dark:bg-gray-800"
            >
              {isPending ? (
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
              disabled={isPending}
              className="w-full dark:bg-gray-800"
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Facebook className="mr-2 h-4 w-4 text-blue-600" />
              )}
              Facebook
            </Button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
