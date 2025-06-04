'use client'

import { useAuth } from "@/lib/contexts/AuthContext"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  // Redirect admin users to admin dashboard
  useEffect(() => {
    if (user?.role === 'admin') {
      router.push('/admin/dashboard')
    }
  }, [user, router])

  // Only show verification warning for email/password users who aren't verified
  const showVerificationWarning = user?.method === 'local' && !user?.isEmailVerified

  // Don't render anything while redirecting admin users
  if (user?.role === 'admin') {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showVerificationWarning && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <h2 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Email Verification Required</h2>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            Please check your email to verify your account. You may have limited access until verification is complete.
          </p>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.name}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          {/* Add quick action buttons */}
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          {/* Add recent activity list */}
        </div>
      </div>
    </div>
  )
}
