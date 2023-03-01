import { classNames } from '@utils/index'
import React, { HTMLAttributes } from 'react'

type Variant = 'paragraph' | 'description' | 'bold' | 'light'
type Color = 'primary' | 'secondary' | 'black' | 'white' | 'tertiary'
type Size = 'sm' | 'xs' | 'base'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  sm: 'text-xs md:text-sm',
  base: 'text-sm md:text-base',
  xs: 'text-xs'
}

const colors: Record<Color, string> = {
  white: 'text-white dark:text-black',
  black: '#4D4D4D',
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary'
}

const variants: Record<Variant, string> = {
  paragraph: 'font-normal',
  description: 'font-medium',
  bold: 'font-bold',
  light: 'font-light'
}

const Text = ({
  as = 'p',
  size = 'sm',
  color = 'black',
  variant = 'paragraph',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([props.className, sizes[size], colors[color], variants[variant]])
  })
}

export default Text
