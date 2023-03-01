import { BreadCrumbs } from '@components/shared/BreadCrumbs'
import Icon from '@components/shared/icon'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  resetTransform: any
  setSizeShadow: Dispatch<SetStateAction<number>>
  zoomIn: any
  stepUpSizeShadow: () => void
  stepDownSizeShadow: () => void
  zoomOut: any
}

const Controls = ({
  resetTransform,
  setSizeShadow,
  zoomIn,
  stepUpSizeShadow,
  zoomOut,
  stepDownSizeShadow
}: Props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 xsm:flex-row justify-between my-[24px] md:my-[34px] mx-[14px] md:mx:[28px] ">
        <BreadCrumbs
          history={[
            { description: 'Home', url: '/' },
            {
              description: 'Fecha',
              url: ''
            },
            {
              description: 'Asientos',
              url: ''
            }
          ]}
        />

        <div className="flex items-center py-[12px] pl-[11px] pr-[14px] border-[0.5px] border-tertiary gap-[22px]">
          <button
            className=" rounded-[3px]   flex justify-center items-center cursor-pointer bg-white"
            onClick={() => {
              zoomOut(0.6, 1000)
              stepDownSizeShadow()
            }}>
            <Icon name="subtract" className="text-[23px] text-[#4D4D4D]" />
          </button>

          <button
            className=" rounded-[3px]  flex justify-center items-center cursor-pointer  bg-white"
            onClick={() => {
              zoomIn(0.6, 1000)
              stepUpSizeShadow()
            }}>
            <Icon name="plus" className="text-[23px] text-[#4D4D4D]" />
          </button>

          <button
            className=" rounded-[3px]  flex justify-center items-center cursor-pointer bg-white"
            onClick={() => {
              resetTransform()
              setSizeShadow(0)
            }}>
            <Icon name="rotate-left" className="text-[23px] text-tertiary" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls
