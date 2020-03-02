import { FC } from "react"
import { Props as Tab } from "./Tab"

export interface Props {
  children?: Tab[]
}

const TabsList: FC<Props> = ({ children }) => {
  let classes = ['list']

  return (
    <ul className={classes.join(' ')}>
      {children}
    </ul>
  )
}

export default TabsList