import { ReactNode, FC } from "react"
import { UIWeightOptions } from "../UI"

export interface Props {
  type?: 'info'
  padding?: UIWeightOptions
  radius?: UIWeightOptions
  shadow?: UIWeightOptions
  children?: ReactNode
}

const Tile: FC<Props> = ({ children, padding, radius, shadow, type = 'info' }) => {
  let classes = ['tile', type]
  if (padding) classes.push(`padding-${padding}`)
  if (radius) classes.push(`radius-${radius}`)
  if (shadow) classes.push(`shadow-${shadow}`)

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Tile