import { FC, ReactNode } from "react"
import { UIColorOptions, UIWeightOptions } from "../../UI"

export interface Props {
  children?: ReactNode
  color?: {
    hue?: UIColorOptions
    weight?: UIWeightOptions
  }
}

const Tabs: FC<Props> = ({ children, color }) => {
  let classes = ['tabs', 'navigation']
  classes = classes.concat(['bg', color && color.hue || 'neutral', `c${color && color.weight || 500}`])

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Tabs