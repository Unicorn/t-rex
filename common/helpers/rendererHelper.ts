export const isClient = () => typeof window === 'object'

export const getWindowSize = () => ({
  height: isClient() ? window.innerHeight : undefined,
  width: isClient() ? window.innerWidth : undefined,
})

export const isObject = <T extends Object>(value: any): value is T =>
  typeof value === 'object' && typeof value !== 'function' && value !== 'undefined'

export const hasNamedChildren = <P>(children: any): children is P => isObject(children) && 'main' in children