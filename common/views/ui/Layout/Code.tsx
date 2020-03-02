import { ReactNode, FC } from "react"
import { UIWeightOptions } from "../UI"

export interface Props {
  children?: ReactNode
  className?: string
  padding?: UIWeightOptions
  radius?: UIWeightOptions
  shadow?: UIWeightOptions
}

const Code: FC<Props> = ({ children, className, padding, radius, shadow }) => {
  let classes = ['code', className]
  if (padding) classes.push(`padding-${padding}`)
  if (radius) classes.push(`radius-${radius}`)
  if (shadow) classes.push(`shadow-${shadow}`)

  return (
    <pre className={classes.join(' ')}>{children}</pre>
  )
}

export default Code