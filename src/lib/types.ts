// src/lib/types.ts

// Auth types
export type User = {
    id: string
    name: string
    email: string
    role?: string
    createdAt?: string
    updatedAt?: string
}

export type AuthResponse = {
    token: string
    user: User
}

export type LoginPayload = {
    email: string
    password: string
}
export type ForgotPassword = {
    email: string
}

export type RegisterPayload = {
    email: string,
    fullName: string,
    phoneNumber: string,
    password: string,
}
export type ApiResponse<T> = {
    success: boolean
    data: T
    message?: string
    error?: string
}

export type PaginatedResponse<T> = {
    data: T[]
    total: number
    page: number
    limit: number
    totalPages: number
}

// Error types
export type ApiError = {
    message: string
    statusCode: number
    errors?: Record<string, string[]>
}

// Form types
export type FieldError = {
    message: string
    type: string
}

export type FormErrors = {
    [key: string]: FieldError
}