import { apiClient } from './client'
import { LoginPayload, AuthResponse, ForgotPassword, RegisterPayload } from '@/lib/types'

export const authApi = {
    login: (payload: LoginPayload) =>
        apiClient.post<AuthResponse>('/user_auth/login', payload),
    forgotPassword: (payload: ForgotPassword) => apiClient.post<AuthResponse>('/user_auth/forgotpassword', payload),
    register: (payload: RegisterPayload) => apiClient.post<AuthResponse>('/user_auth/signup', payload),
    logout: () => apiClient.post('/auth/logout'),
    getSession: () => apiClient.get<AuthResponse>('/auth/session')
}   