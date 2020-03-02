import { FC, ReactNode } from "react"

export interface Props {
  children?: ReactNode
}

const TabPane: FC<Props> = ({ children }) => {
  let classes = ['pane']

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default TabPane