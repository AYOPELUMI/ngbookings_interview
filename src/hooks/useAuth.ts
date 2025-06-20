import { useMutation, useQuery } from '@tanstack/react-query'
import { authApi } from '@/api/auth'
import { useAuthStore } from '@/stores/auth.store'
import { setAuthToken, removeAuthToken } from '@/lib/cookies'
import { useRouter } from 'next/navigation'
import type { AxiosError, AxiosResponse } from 'axios'
import type { AuthResponse } from '@/lib/types'
import { toast } from 'sonner'

export const useLogin = () => {
    const router = useRouter()
    const setAuth = useAuthStore((state) => state.setAuth)

    return useMutation({
        mutationFn: authApi.login,
        onSuccess: () => {

            toast.success("Login successful")
            router.push('/')
        },
        onError: (error: AxiosError) => {
            console.log({ error })
            toast.error(error.response?.data?.message ?? "")
        }
    })
}

export const  useRegister = () => {
    const router = useRouter()
    const setAuth = useAuthStore((state) => state.setAuth)

    return useMutation({
        mutationFn: authApi.register,
        onSuccess: (response: AxiosResponse<AuthResponse>) => {
            // const { token, user } = response.data
            // setAuthToken(token)
            // setAuth(token, user)
            // toast.success("Login successful")
            // router.push('/')

            console.log({ response })
        },
        onError: (error: AxiosError) => {
            console.log({ error })
            toast.error(error.response?.data?.message ?? "")
        }
    })
}
export const useForgotPassword = () => {
    const router = useRouter()
    const setAuth = useAuthStore((state) => state.setAuth)

    return useMutation({
        mutationFn: authApi.forgotPassword,
        onSuccess: (response: AxiosResponse<AuthResponse>) => {
            const { token, user } = response.data
            setAuthToken(token)
            setAuth(token, user)
            toast.success("Reset Password successful")
            router.push('/login')
        },
        onError: (error: AxiosError) => {
            console.log({ error })
            toast.error(error.response?.data?.message ?? error.message)
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
    const { token } = useAuthStore()
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