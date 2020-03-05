import { get } from 'lodash'
import { UISizeOptions, UIColor } from "@/views/ui/UI";

export const bgColorClass = (color?: UIColor) => {
  if (color && (color.hue || color.weight))
    return `bg ${get(color, 'hue', 'neutral')} c${get(color, 'weight', '500')}`

  return ''
}

export const paddingClass = (size?: UISizeOptions) => size ? `padding-${size}` : ''
export const radiusClass = (size?: UISizeOptions) => size ? `radius-${size}` : ''
export const shadowClass = (size?: UISizeOptions) => size ? `shadow-${size}` : ''