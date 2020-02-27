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

export const defaultProps: Props = {
  color: {
    hue: 'neutral',
    weight: '500'
  }
}

const Toolbar: FC<Props> = ({ children, color = defaultProps.color, constrained }) => {
  let classes = ['toolbar', 'navigation']
  classes = classes.concat(['bg', color.hue, `c${color.weight}`])

  return (
    <header className={classes.join(' ')}>
      <div className={constrained ? 'container' : ''}>
        <div className="row">
          <div className="left">
            {children.left && children.left.component}
          </div>

          <div className="right">
            {children.right && children.right.component}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Toolbar