import Image from 'next/image'
import React from 'react'
import { useItemCarrito } from 'src/store/itemCarrito'
import Heading from '../Heading'
import Text from '../Text'

interface Props {
  numberAsiento?: number
  numberFila?: number
  numberRuedo?: number
  px?: string
}

const CardCarrito = ({
  numberAsiento,
  numberFila,
  numberRuedo,
  px = 'px-[20px] sm:px-[33px] md:px-[53px]'
}: Props) => {
  const [carrito] = useItemCarrito((state) => [state.carrito])
  console.log(carrito)

  return (
    <>
      {carrito.map((item, index) => (
        <div className="flex w-full items-center gap-6 justify-center" key={index}>
          <div
            className={`bg-white pt-[12px] ${px} pb-2 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-[647px]`}>
            <div
              key={index}
              className="flex justify-between pb-[10px] border-b-[0.5px] border-[#4D4D4D]">
              <div className="flex flex-col items-center  ">
                <Text size="sm" variant="bold">
                  Rueda
                </Text>
                <Heading size="2xl" variant="regular">
                  {item.tendido}
                </Heading>
              </div>
              <div className="flex flex-col items-center">
                <Text size="sm" variant="bold">
                  Fila
                </Text>
                <Heading size="2xl" variant="regular">
                  {item.fila}
                </Heading>
              </div>
              <div className="flex flex-col items-center">
                <Text size="sm" variant="bold">
                  Asiento
                </Text>
                <Heading size="2xl" variant="regular">
                  {/* {numberAsiento} */}
                  {item.asiento}
                </Heading>
              </div>
            </div>

            <div className="mt-1 flex justify-between">
              <Text size="xs" color="secondary">
                Costo por ticket
              </Text>
              <Text size="sm">$75</Text>
            </div>
          </div>
          <Image src="/cruz.png" width={18} height={18} className="cursor-pointer" />
        </div>
      ))}
    </>
  )
}

export default CardCarrito
