import { FC } from "react"
import { Props as TabPane } from "./TabPane"

export interface Props {
  children?: TabPane[]
}

const TabsList: FC<Props> = ({ children }) => {
  let classes = ['panes']

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default TabsList