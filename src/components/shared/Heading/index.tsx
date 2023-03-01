import { classNames } from '@utils/index'
import React, { HTMLAttributes } from 'react'

type Variant = 'title' | 'regular' | 'medium' | 'semiBold'
type Color = 'primary' | 'secondary' | 'black' | 'white'
export type Size = '2xl' | 'text-base'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: 'title' | 'regular' | 'medium' | 'semiBold'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<Size, string> = {
  '2xl': 'text-xl md:text-2xl',
  'text-base': 'text-sm md:text-base'
}

const colors: Record<Color, string> = {
  white: 'text-white',
  black: '#4D4D4D',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  title: 'font-bold',
  medium: 'font-medium',
  semiBold: 'font-semibold',
  regular: 'font-normal'
}

const Heading = ({
  as = 'h1',
  size = 'text-base',
  color = 'black',
  variant = 'title',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([props.className, sizes[size], colors[color], variants[variant]])
  })
}

export default Heading
