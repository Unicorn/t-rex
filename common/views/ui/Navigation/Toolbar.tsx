import { FC } from "react"
import { UIColorOptions, UIWeightOptions } from "../UI"

export interface Props {
  color?: {
    hue?: UIColorOptions
    weight?: UIWeightOptions
  }
}

export const defaultProps: Props = {
  color: {
    hue: 'neutral',
    weight: '500'
  }
}

const Toolbar: FC<Props> = ({ color = defaultProps.color }) => {
  let classes = ['toolbar', 'navigation']
  classes = classes.concat(['bg', color.hue, `c${color.weight}`])

  return (
    <header className={classes.join(' ')}>
      <nav>
        <a href="#">Item</a>
        <a href="#">Item</a>
        <a href="#">Item</a>
        <a href="#">Item</a>
      </nav>
    </header>
  )
}

export default Toolbar