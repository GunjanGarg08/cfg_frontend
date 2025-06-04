'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  isEmailVerified: boolean
}

interface AuthContextType {
  user: User | null
  loading: boolean
  loginWithOAuth: (provider: 'google' | 'facebook') => void
  login: (email: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  verifyEmail: (email: string, otp: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      // Check if we have a token in cookies or localStorage
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
      if (!token) {
        setLoading(false)
        return
      }

      // Set authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/user`)
      
      if (res.data.success) {
        setUser(res.data.data)
      } else {
        throw new Error(res.data.message)
      }
    } catch (error) {
      // Clear auth state on error
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      delete axios.defaults.headers.common['Authorization']
    } finally {
      setLoading(false)
    }
  }

  const loginWithOAuth = (provider: 'google' | 'facebook') => {
    // Redirect to backend OAuth route
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/${provider}`
  }

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password
      })

      if (!res.data.success) {
        throw new Error(res.data.message)
      }

      // Backend sets HTTP-only cookie, no need to handle token here
      // Just update the user state
      setUser(res.data.data.user)
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        name: username,
        email,
        password
      })

      if (!res.data.success) {
        throw new Error(res.data.message)
      }

      return res.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed')
    }
  }

  const logout = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
      if (res.data.success) {
        setUser(null)
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear auth state regardless of API call result
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      delete axios.defaults.headers.common['Authorization']
      setUser(null)
    }
  }

  const verifyEmail = async (email: string, otp: string) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`, {
        email,
        otp
      })

      if (!res.data.success) {
        throw new Error(res.data.message)
      }

      return res.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Email verification failed')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      loginWithOAuth,
      login,
      register,
      logout,
      verifyEmail
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
