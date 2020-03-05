import { FC, ReactNode, ReactType } from 'react'
import { UISizeOptions } from '../UI'

export interface HeaderProps {
  Element?: ReactType
  size?: UISizeOptions
  children?: ReactNode
}

const Header: FC<HeaderProps> = ({ Element, size, children }) => (
  <Element className={`header h${size}`}>
    {children}
  </Element>
)

Header.defaultProps = {
  Element: 'span',
  size: '500'
}

export default Header