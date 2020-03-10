import { FC, ReactNode } from 'react'

import { UIColor, UISizeOptions } from '../UI'
import { bgColorClass, radiusClass, shadowClass, paddingClass } from '@/helpers/classHelper'
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

export interface ImageProps {
  alt?: string
  children?: ReactNode | ChildrenObject
  className?: string
  color?: UIColor
  shadowBlur?: boolean
  image?: string
  theme?: 'light' | 'dark'
  padding?: UISizeOptions
  radius?: UISizeOptions
  shadow?: UISizeOptions
}

const Image: FC<ImageProps> = ({ alt, className, padding, radius, shadow, shadowBlur, children, color, image, theme }) => {
  const classes = ['image', theme, className, bgColorClass(color), paddingClass(padding), radiusClass(radius), shadowClass(shadow)]

  if (hasNamedChildren<ChildrenObject>(children)) {
    const { head, main, foot } = children as ChildrenObject

    return (
      <figure className={classes.join(' ')} style={{ backgroundImage: `url(${image})` }}>
        <img className="foreground" src={image} alt={alt} />
        <img className="background" src={image} alt={alt} />
        {head && <header className={`head ${paddingClass(head.padding)} ${bgColorClass(head.color)}`}>{head.component}</header>}
        {main && <div className={`main ${paddingClass(main.padding)} ${bgColorClass(main.color)}`}>{main.component}</div>}
        {foot && <div className={`foot ${paddingClass(foot.padding)} ${bgColorClass(foot.color)}`}>{foot.component}</div>}
      </figure>
    )
  }

  return (
    <figure className={classes.join(' ')}>
      <img className="foreground" src={image} alt={alt} />
      <img className="background" src={image} alt={alt} />
      <div className="inner">{children}</div>
    </figure>
  )
}

Image.defaultProps = {
  alt: 'featured image',
  theme: 'dark'
}

export default Image