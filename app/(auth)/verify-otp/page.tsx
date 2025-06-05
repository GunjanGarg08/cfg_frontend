"use client"

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2, CheckCircle, ArrowLeft } from "lucide-react"
import { useAuth } from "@/lib/contexts/AuthContext"
import { toast } from 'sonner'

export default function VerifyOTPPage() {  const { verifyEmail, resendOTP } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const role = searchParams.get('role') 
  const [otp, setOtp] = React.useState("")
  const [error, setError] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Auto-focus input on mount
  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return
    
    // Validate OTP format
    const cleanOTP = otp.trim()
    if (!/^\d{6}$/.test(cleanOTP)) {
      setError("Please enter a valid 6-digit verification code")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await verifyEmail(email, cleanOTP)
      
      toast.success("Email verified successfully!", {
        id: `verify-success-${Date.now()}`,
        duration: 3000,
      })
      
      // Add a small delay before redirecting
      setTimeout(() => {
        router.push(`/login${role ? `?role=${role}` : ''}`)
      }, 1000)
      
    } catch (error: any) {
      setOtp("")
      setError(error.message || "Verification failed. Please try again.")
      
      toast.error(error.message || "Verification failed", {
        id: `verify-error-${Date.now()}`,
        duration: 5000,
      })
      
      inputRef.current?.focus()
    } finally {
      setIsLoading(false)
    }
  }, [email, otp, role, router, verifyEmail, isLoading])

  // Handle OTP input changes
  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(value)
    setError("")
    
    // Auto-submit when OTP is complete
    if (value.length === 6) {
      const event = new Event('submit') as any
      setTimeout(() => handleSubmit(event), 100)
    }
  }

  // Redirect if no email
  React.useEffect(() => {
    if (!email) {
      router.push('/register')
    }
  }, [email, router])

  if (!email) return null

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/register')}
              className="mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Verify Your Email</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Enter the code sent to {email}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium">
                Verification Code
              </label>
              <Input
                id="otp"
                ref={inputRef}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d*"
                maxLength={6}
                value={otp}
                onChange={handleOTPChange}
                className="text-center text-2xl tracking-widest h-14"
                placeholder="000000"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Enter the 6-digit code we sent to your email
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-11"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Verify Email
                </>
              )}
            </Button>

            <div className="text-center">              <Button
                variant="link"
                className="text-sm"
                disabled={isLoading}
                onClick={async () => {
                  if (!email) return
                  
                  try {
                    setIsLoading(true)
                    await resendOTP(email)
                    
                    toast.success("New verification code sent! Please check your email.", {
                      id: `resend-success-${Date.now()}`
                    })
                    setOtp("")
                  } catch (error: any) {
                    toast.error(error.message || "Failed to resend code", {
                      id: `resend-error-${Date.now()}`
                    })
                  } finally {
                    setIsLoading(false)
                  }
                }}
              >
                Didn't receive the code? Try again
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
