import { getCookie, setCookie, deleteCookie } from 'cookies-next'

/**
 * Cookie options type for cookies-next package
 * 
 * Note: The actual types from cookies-next might be slightly different
 * depending on the package version. This is a comprehensive type definition
 * that covers most use cases.
 */
type CookieOptions = {
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'lax' | 'strict' | 'none'
  maxAge?: number
  expires?: Date
  httpOnly?: boolean
  partitioned?: boolean
  priority?: 'low' | 'medium' | 'high'
  request?: Request
  response?: Response
  req?: any
  res?: any
}

const defaultCookieOptions: CookieOptions = {
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  // httpOnly: false // Explicitly false since frontend can't set httpOnly cookies
}

/**
 * Gets the authentication token from cookies
 */
export const getAuthToken = (additionalOptions?: Partial<CookieOptions>) => {
  return getCookie('auth-token', { ...defaultCookieOptions, ...additionalOptions })
}

/**
 * Sets the authentication token in cookies
 * @param token The JWT or session token to store
 * @param additionalOptions Additional cookie options
 */
export const setAuthToken = (
  token: string, 
  additionalOptions?: Partial<CookieOptions>
) => {
  setCookie('auth-token', token, { 
    ...defaultCookieOptions,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    ...additionalOptions
  })
}

/**
 * Removes the authentication token from cookies
 */
export const removeAuthToken = (additionalOptions?: Partial<CookieOptions>) => {
  deleteCookie('auth-token', { ...defaultCookieOptions, ...additionalOptions })
}