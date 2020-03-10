import { FC, ReactNode } from 'react'

import { UIColor, UISizeOptions } from '../UI'
import { bgColorClass, radiusClass, shadowClass, paddingClass } from '@/helpers/classHelper'
import { type } from 'os'
import { hasNamedChildren } from '@/helpers/rendererHelper'

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

export interface HeroProps {
  children?: ReactNode | ChildrenObject
  className?: string
  color?: UIColor
  image?: string
  mode?: 'light' | 'dark'
  padding?: UISizeOptions
  radius?: UISizeOptions
  shadow?: UISizeOptions
}

const Hero: FC<HeroProps> = ({ className, padding, radius, shadow, children, color, image, mode }) => {
  const classes = ['hero', mode, className, bgColorClass(color), paddingClass(padding), radiusClass(radius), shadowClass(shadow)]

  if (hasNamedChildren<ChildrenObject>(children)) {
    const { head, main, foot } = children as ChildrenObject

    return (
      <div className={classes.join(' ')} style={{ backgroundImage: `url(${image})` }}>
        {head && <header className={`head ${paddingClass(head.padding)} ${bgColorClass(head.color)}`}>{head.component}</header>}
        {main && <div className={`main ${paddingClass(main.padding)} ${bgColorClass(main.color)}`}>{main.component}</div>}
        {foot && <div className={`foot ${paddingClass(foot.padding)} ${bgColorClass(foot.color)}`}>{foot.component}</div>}
      </div>
    )
  }

  return (
    <div className={classes.join(' ')} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  )
}

Hero.defaultProps = {
  mode: 'dark'
}

export default Hero