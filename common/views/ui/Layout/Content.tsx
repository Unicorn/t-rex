import { ReactNode, FC } from "react"
import { UISizeOptions } from "../UI"

export interface Props {
  children?: ReactNode
  className?: string
  padding?: UISizeOptions
  radius?: UISizeOptions
  shadow?: UISizeOptions
}

const Content: FC<Props> = ({ children, className, padding, radius, shadow }) => {
  let classes = ['content', className]
  if (padding) classes.push(`padding-${padding}`)
  if (radius) classes.push(`radius-${radius}`)
  if (shadow) classes.push(`shadow-${shadow}`)

  return (
    <section className={classes.join(' ')}>
      {children}
    </section>
  )
}

export default Content