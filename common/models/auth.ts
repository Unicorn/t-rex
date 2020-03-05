export type AuthSections = 'login' | 'register' | 'reset'

export interface AuthForm {
  [key: string]: string
  email: string
  password: string
  confirm: string
}
