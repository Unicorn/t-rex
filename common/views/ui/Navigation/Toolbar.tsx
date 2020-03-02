import { FC, ReactNode } from "react"
import { UIColorOptions, UIWeightOptions } from "../UI"

export interface Props {
  children?: {
    left?: {
      component: ReactNode
    }
    right?: {
      component: ReactNode
    }
  }
  color?: {
    hue?: UIColorOptions
    weight?: UIWeightOptions
  }
  constrained?: boolean
}

const Toolbar: FC<Props> = ({ children, color, constrained }) => {
  let classes = ['toolbar', 'navigation']
  classes = classes.concat(['bg', color && color.hue || 'neutral', `c${color && color.weight || 500}`])

  return (
    <header className={classes.join(' ')}>
      <div className={constrained ? 'container row' : 'row'}>
        <div className="left">
          {children && children.left && children.left.component}
        </div>

        <div className="right">
          {children && children.right && children.right.component}
        </div>
      </div>
    </header>
  )
}

export default Toolbar