import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: Props) => {
  return (
    <>
      <button
        {...props}
        className="bg-tertiary py-[10px] px-[39px] text-white hover:bg-[#ff4920] transition-all duration-300 rounded-[5px]">
        {text}
      </button>
    </>
  )
}

export default Button
