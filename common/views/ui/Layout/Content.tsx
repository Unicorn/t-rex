import { ReactNode, FC } from "react"
import { UIWeightOptions } from "../UI"

export interface Props {
  children?: ReactNode
  className?: string
  padding?: UIWeightOptions
  radius?: UIWeightOptions
  shadow?: UIWeightOptions
}

const Content: FC<Props> = ({ children, className, padding, radius, shadow }) => {
  let classes = ['content', className]
  if (padding) classes.push(`padding-${padding}`)
  if (radius) classes.push(`radius-${radius}`)
  if (shadow) classes.push(`shadow-${shadow}`)

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Content