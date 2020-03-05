import { FC, ReactNode } from 'react'

export interface ButtonGroupProps {
  children?: ReactNode
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return (
    <div className="button-group">
      {children}
    </div>
  )
}

export default ButtonGroup