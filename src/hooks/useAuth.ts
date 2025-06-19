import { useMutation, useQuery } from '@tanstack/react-query'
import { authApi } from '@/api/auth'
import { useAuthStore } from '@/stores/auth.store'
import { setAuthToken, removeAuthToken } from '@/lib/cookies'
import { useRouter } from 'next/navigation'
import type { AxiosResponse } from 'axios'
import type { AuthResponse } from '@/lib/types'

export const useLogin = () => {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response: AxiosResponse<AuthResponse>) => {
      const { token, user } = response.data
      setAuthToken(token)
      setAuth(token, user)
      router.push('/dashboard')
    }
  })
}

export const useLogout = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth)
  const router = useRouter()

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      removeAuthToken()
      clearAuth()
      router.push('/login')
    }
  })
}

export const useSession = () => {
  const { token, user } = useAuthStore()
  const setAuth = useAuthStore((state) => state.setAuth)

  return useQuery({
    queryKey: ['session'],
    queryFn: authApi.getSession,
    enabled: !token,
    select: (response: AxiosResponse<AuthResponse>) => response.data,
    onSuccess: (data: AuthResponse) => {
      if (data.token && data.user) {
        setAuth(data.token, data.user)
      }
    }
  })
}