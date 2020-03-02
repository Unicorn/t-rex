import { FC, ReactNode } from "react"

export interface Props {
  children?: ReactNode
}

const Tab: FC<Props> = ({ children }) => {
  let classes = ['item']

  return (
    <li className={classes.join(' ')}>
      {children}
    </li>
  )
}

export default Tab