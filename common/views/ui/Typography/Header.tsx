import { FC, ReactNode, ReactType } from 'react'

export interface HeaderProps {
  Element?: ReactType
  size?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  children?: ReactNode
}

const Header: FC<HeaderProps> = ({ Element = 'span', size = 500, children }) => (
  <Element className={`header h${size}`}>
    {children}
  </Element>
)

export default Header