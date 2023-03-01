import { classNames } from '@utils/classNames'
import React, { InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLElement> {
  children?: ReactNode
  tag?: any
}

const Container = ({ children, tag = 'div', ...props }: Props) => {
  const { className, ...values } = props

  const TAG = tag
  return (
    <TAG {...values} className={classNames(['max-w-[1250px] w-[90%]  mx-auto', className])}>
      {children}
    </TAG>
  )
}

export { Container }
