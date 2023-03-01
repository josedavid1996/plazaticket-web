import Button from '@components/shared/Button'
import CardCarrito from '@components/shared/CardCarrito'
import HeaderBanner from '@components/shared/HeaderBanner'
import Heading from '@components/shared/Heading'
import MapZoom from '@components/shared/MapZoom'
import PriceItems from '@components/shared/PriceItems'
import { Seo } from '@components/shared/Seo/Index'
import Text from '@components/shared/Text'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useCarrito } from 'src/store/carrito'
import { useItemCarrito } from 'src/store/itemCarrito'
import { useStore } from 'zustand'

const dataFalse = [
  { title: 'Tendido 01', price: '$75' },
  { title: 'Tendido 02', price: '$129' },
  { title: 'Tendido 03', price: '$75' },
  { title: 'Tendido 04', price: '$200' },
  { title: 'Tendido 05', price: '$135' },
  { title: 'Tendido 06', price: '$75' },
  { title: 'Tendido 07', price: '$200' },
  { title: 'Tendido 18', price: '$135' }
]

const Asientos = () => {
  const [isCarrito] = useCarrito((state) => [state.isCarrito])
  const [carrito] = useItemCarrito((state) => [state.carrito])

  const { push } = useRouter()

  const dataSeo = {
    tittlePage: 'Asientos',
    description: '',
    url: '',
    keywords: '',
    imgPrincipal: ''
  }

  const dataFalsa = [
    {
      numberAsiento: 54,
      numberFila: 1,
      numberRuedo: 2
    },
    {
      numberAsiento: 55,
      numberFila: 1,
      numberRuedo: 2
    },
    {
      numberAsiento: 56,
      numberFila: 1,
      numberRuedo: 2
    }
  ]
  return (
    <div>
      <Seo data={dataSeo} />
      {/* Banner  */}
      <HeaderBanner />

      {/* Mapa and Price */}
      <div className="flex flex-col md:flex-row items-start w-full h-full bg-[#EFEFEF] ">
        {/* Mapa */}
        <div className="w-full  flex justify-center items-center">
          <MapZoom />
        </div>
        {/* Price */}
        <div className="w-full md:max-w-[300px] h-full lg:max-w-[375px] ">
          {/* Info Tendidos */}
          <div className={`${isCarrito ? 'hidden' : 'block'} h-full`}>
            <div className="py-[30px]  pl-[37px] pr-[32px] text-[#4D4D4D]">
              <h3 className="font-bold text-2xl text-center">PACO DE LUCIA</h3>
              <h5 className=" text-base text-center">VIERNES 16</h5>
            </div>

            {/* Group Price */}
            <div className="flex justify-center  flex-col">
              {dataFalse.map((item, index) => (
                <PriceItems key={index} title={item.title} price={item.price} />
              ))}
            </div>
          </div>

          {/* info Asientos selecionados */}
          <div
            className={`${isCarrito ? 'flex' : 'hidden'}  flex-col justify-between h-full w-full `}>
            <div className="pt-[30px] px-[20px] md:px-[30px]">
              <div className="pb-[30px]  pl-[6px] text-[#4D4D4D]">
                <Heading size="2xl">Mis tickets</Heading>
              </div>

              <div>
                <div className="flex flex-col gap-5 md:gap-7 ">
                  <CardCarrito px="px-[27px]" />
                </div>
              </div>
            </div>

            <div className="w-full bg-white px-[20px]  md:px-[30px] pb-4 md:pb-5 pt-[30px] md:pt-[44px] flex flex-col gap-4 md:gap-5 mt-[50px]">
              <div className="flex justify-between">
                <Text size="sm">Subtotal</Text>
                <Heading size="2xl">${carrito.length * 75}</Heading>
              </div>
              <Button text="Continuar" onClick={() => push('/asientos/carrito')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asientos
