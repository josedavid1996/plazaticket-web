import React, { ReactNode } from 'react'
import HeaderBanner from '@components/shared/HeaderBanner'
import { Container } from '../Container/Container'
import { BreadCrumbs } from '@components/shared/BreadCrumbs'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutCheckout = ({ children }: Props) => {
  const { pathname, ...router } = useRouter()
  const textsBreadCrumbs = pathname.split('/').map((item) => {
    if (item.length === 0) {
      return { description: 'Home', url: '/' }
    }
    return {
      description: item.replaceAll('-', ' '),
      url: '/'
    }
  })
  const route = textsBreadCrumbs[textsBreadCrumbs.length - 1].description

  return (
    <>
      <HeaderBanner />
      <Container className="mt-5 md:mt-[35px] bg-[#ECECEC]">
        <div className="mb-5 md:mb-10">
          <BreadCrumbs textsBreadCrumbs={textsBreadCrumbs} history={textsBreadCrumbs} />
        </div>
        <p className="text-[15px] text-[#4D4D4D60] mb-5 md:mb-10">Bienvenido Jose </p>

        {/* STEP */}
        <div className="flex justify-between relative after:content-[''] after:w-[calc(100%_-_70px)] sm:after:w-[calc(100%_-_82px)]  after:h-[1px] after:absolute after:bg-black after:top-[15px] after:left-0 after:right-0 after:mx-auto">
          <div className="flex flex-col items-center ">
            <div className="z-20 bg-[#ECECEC]">
              <span
                className={`${
                  route === 'carrito' ? 'bg-tertiary' : 'bg-tertiary-200'
                } rounded-full relative w-[30px] h-[30px] bg-tertiary text-white flex justify-center items-center`}>
                1
              </span>
            </div>
            <p className="font-bold text-[12px] sm:text-[15px] text-gray">Carrito</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="z-20 bg-[#ECECEC]">
              <span
                className={`${
                  route === 'datos de compra'
                    ? 'bg-tertiary text-white'
                    : route === 'carrito'
                    ? 'border border-black '
                    : 'bg-tertiary-200 text-white'
                } rounded-full relative w-[30px] h-[30px]  flex justify-center items-center`}>
                2
              </span>
            </div>
            <p className="font-bold text-[12px] sm:text-[15px] text-gray">Datos de compra</p>
          </div>
          <div className="flex flex-col items-center  ">
            <div className="z-20 bg-[#ECECEC]">
              <span
                className={`${
                  route === 'confirmacion'
                    ? 'bg-tertiary text-white'
                    : route === 'carrito' || route === 'datos de compra'
                    ? 'border border-black '
                    : 'bg-tertiary-200 text-white'
                } rounded-full relative w-[30px] h-[30px]   flex justify-center items-center`}>
                3
              </span>
            </div>
            <p className="font-bold text-[12px] sm:text-[15px] text-gray">Confirmación</p>
          </div>
        </div>
        {children}
      </Container>
    </>
  )
}

export default LayoutCheckout
