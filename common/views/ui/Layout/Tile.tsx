import { ReactNode, FC } from "react"

import { UISizeOptions, UIColor } from "../UI"
import { paddingClass, radiusClass, shadowClass, bgColorClass } from "@/helpers/classHelper"
import { hasNamedChildren } from "@/helpers/rendererHelper"

interface ChildrenObject {
  head?: {
    color?: UIColor
    component: ReactNode
    padding?: UISizeOptions
  },
  main?: {
    color?: UIColor
    component: ReactNode
    padding?: UISizeOptions
  },
  foot?: {
    color?: UIColor,
    component: ReactNode
    padding?: UISizeOptions
  }
}

export interface Props {
  children?: ReactNode | ChildrenObject
  className?: string
  color?: UIColor
  padding?: UISizeOptions
  radius?: UISizeOptions
  shadow?: UISizeOptions
  type?: 'info'
}

const Tile: FC<Props> = ({ children, className, color, padding, radius, shadow, type }) => {
  const baseClass = `tile ${type} ${className || ''}`

  if (hasNamedChildren<ChildrenObject>(children)) {
    const { head, main, foot } = children as ChildrenObject

    return (
      <div className={`${baseClass} ${radiusClass(radius)} ${shadowClass(shadow)}`}>
        {head && <header className={`head ${paddingClass(head.padding)} ${bgColorClass(head.color)}`}>{head.component}</header>}
        {main && <div className={`main ${paddingClass(main.padding)} ${bgColorClass(main.color)}`}>{main.component}</div>}
        {foot && <div className={`foot ${paddingClass(foot.padding)} ${bgColorClass(foot.color)}`}>{foot.component}</div>}
      </div>
    )
  }

  return (
    <div className={`${baseClass} basic ${paddingClass(padding)} ${radiusClass(radius)} ${shadowClass(shadow)} ${bgColorClass(color)}`}>
      {children}
    </div>
  )
}

Tile.defaultProps = {
  type: 'info'
}

export default Tile