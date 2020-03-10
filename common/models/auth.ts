export type AuthSections = 'login' | 'register' | 'reset'

export interface AuthForm {
  [key: string]: string
  email: string
  password: string
  confirm: string
}

export enum AUTH {
  LOGIN = 'neue/auth/LOGIN'
}

export interface Auth {
  isLoggedIn: boolean
}

export interface AuthAction {
  type: AUTH
  payload?: Auth
}