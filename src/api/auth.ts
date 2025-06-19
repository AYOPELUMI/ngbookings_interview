import { apiClient } from './client'
import { LoginPayload, AuthResponse } from '@/lib/types'

export const authApi = {
    login: (payload: LoginPayload) =>
        apiClient.post<AuthResponse>('/auth/login', payload),
    logout: () => apiClient.post('/auth/logout'),
    getSession: () => apiClient.get<AuthResponse>('/auth/session')
}   