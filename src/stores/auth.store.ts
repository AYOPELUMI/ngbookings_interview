import { User } from '@/lib/types'
import { create } from 'zustand'

type AuthState = {
    token: string | null
    user: User | null
    isAuthenticated: boolean
    setAuth: (token: string, user: User) => void
    clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    isAuthenticated: false,
    setAuth: (token, user) => set({ token, user, isAuthenticated: true }),
    clearAuth: () => set({ token: null, user: null, isAuthenticated: false })
}))