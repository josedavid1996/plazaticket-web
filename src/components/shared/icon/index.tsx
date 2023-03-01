import dynamic from 'next/dynamic'
import { memo, RefObject, Suspense, SVGProps } from 'react'

export type IconName =
  | 'user'
  | 'cart'
  | 'start'
  | 'rotate-left'
  | 'plus'
  | 'subtract'
  | 'slash'
  | 'eye'
  | 'eye-slash'
  | 'edit'
  | 'x-mark'
  | 'shield-check'
  | 'arrow-left'

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
  ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null | undefined
}
// Poner tipo
const icons: Record<IconName, any> = {
  user: dynamic(() => import('@assets/icons/person-outline.svg')),
  cart: dynamic(() => import('@assets/icons/cart-outline.svg')),
  start: dynamic(() => import('@assets/icons/star-regular.svg')),
  'rotate-left': dynamic(() => import('@assets/icons/rotate-left-solid.svg')),
  plus: dynamic(() => import('@assets/icons/plus-solid.svg')),
  subtract: dynamic(() => import('@assets/icons/minus-solid.svg')),
  slash: dynamic(() => import('@assets/icons/slash.svg')),
  eye: dynamic(() => import('@assets/icons/eye-regular.svg')),
  'eye-slash': dynamic(() => import('@assets/icons/eye-slash-regular.svg')),
  edit: dynamic(() => import('@assets/icons/edit.svg')),
  'x-mark': dynamic(() => import('@assets/icons/x-mark.svg')),
  'shield-check': dynamic(() => import('@assets/icons/shield-check.svg')),
  'arrow-left': dynamic(() => import('@assets/icons/arrow-left-solid.svg'))
}
const Icon = ({ name, ...props }: Props) => {
  const Component = icons[name]

  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

export default memo(Icon)
