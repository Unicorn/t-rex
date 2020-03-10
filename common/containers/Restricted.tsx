import { FC, ReactNode } from 'react'

export interface RestrictedProps {
  children?: ReactNode
}

const Restricted: FC<RestrictedProps> = ({ children, handler }) => {
  return children
}

export default Restricted