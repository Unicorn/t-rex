import { AuthForm } from '@/models/auth'

export const validateRequired = (v: string | number): [boolean, string] => {
  const value = v.toString()
  const valid = value ? value.replace(/\t|\s|\n|\r/g, '').length > 0 : false
  return [valid, 'Required']
}

export const validateEmail = (value: string): [boolean, string] => {
  const valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  return [valid, 'Invalid email']
}

export const validatePassword = (value: string): [boolean, string] => {
  const valid = value.length > 6
  return [valid, 'Password must be six characters long']
}

export const validatePasswordMatch = (a: string, b: string): [boolean, string] => {
  return [a === b, 'Passwords do not match']
}

export const validateLogin = (user: AuthForm): string[] => {
  const validations = []
  validations.push(validateEmail(user.email))
  validations.push(validatePassword(user.password))
  return validations.filter(v => !v[0]).map(v => v[1])
}

export const validateRegister = (user: AuthForm): string[] => {
  const validations = []
  validations.push(validateEmail(user.email))
  validations.push(validatePassword(user.password))
  validations.push(validatePasswordMatch(user.password, user.confirm))
  return validations.filter(v => !v[0]).map(v => v[1])
}
