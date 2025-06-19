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
  
  // Booking types
  export type Booking = {
    id: string
    userId: string
    eventId: string
    status: 'pending' | 'confirmed' | 'cancelled'
    createdAt: string
    updatedAt: string
    event?: Event
  }
  
  export type Event = {
    id: string
    title: string
    description: string
    date: string
    location: string
    price: number
    capacity: number
    availableSpots: number
    createdAt: string
    updatedAt: string
  }
  
  // API response types
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