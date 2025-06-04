'use client'

import { useAuth } from "@/lib/contexts/AuthContext"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminDashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  // Redirect non-admin users
  useEffect(() => {
    if (user && user.role !== 'admin') {
      router.push('/dashboard')
    }
  }, [user, router])

  if (user?.role !== 'admin') {
    return null // Don't render anything while redirecting
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <h3 className="font-semibold mb-2">Verified Users</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        
        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
          <h3 className="font-semibold mb-2">New Users (Today)</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <p className="text-gray-500 dark:text-gray-400">No users yet</p>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>API Status</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>OAuth Services</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
