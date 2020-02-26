import { FC, ReactNode, ReactType } from 'react'
import { UIWeightOptions } from '../UI'

export interface HeaderProps {
  Element?: ReactType
  size?: UIWeightOptions
  children?: ReactNode
}

const Header: FC<HeaderProps> = ({ Element = 'span', size = 500, children }) => (
  <Element className={`header h${size}`}>
    {children}
  </Element>
)

export default Header