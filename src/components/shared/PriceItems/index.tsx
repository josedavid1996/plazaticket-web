import React from 'react'

interface Props {
  title: string
  price: string
}

const PriceItems = ({ title, price }: Props) => {
  return (
    <>
      <div className="flex text-[#4D4D4D] justify-between items-center border-b border-tertiary py-[21px] px-[35px]">
        <h4 className="font-bold text-xl ">{title}</h4>
        <span className="text-sm">desde</span>
        <h4 className="font-medium text-xl text-secondary">{price}</h4>
      </div>
    </>
  )
}

export default PriceItems
