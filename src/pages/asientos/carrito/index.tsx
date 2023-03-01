import LayoutCheckout from '@components/layout/LayoutCheckout'
import Button from '@components/shared/Button'
import CardCarrito from '@components/shared/CardCarrito'
import CardCheckout from '@components/shared/CardCheckout'
import Heading from '@components/shared/Heading'
import Icon from '@components/shared/icon'
import Text from '@components/shared/Text'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

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

const Carrito = () => {
  const { push } = useRouter()
  return (
    <div className="bg-[#ECECEC] pb-10">
      <LayoutCheckout>
        <div className="mt-4 sm:mt-8 md:mt-10 w-full bg-[#ECECEC] flex gap-9 flex-col items-center lg:flex-row">
          {/* Cards Carrito */}
          <div className=" w-full flex flex-col gap-7">
            {/* <div className="flex w-full items-center gap-6 ">
              <div className="bg-white pt-[12px] px-[20px] sm:px-[33px] md:px-[53px] pb-2 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <div className="flex justify-between pb-[10px] border-b-[0.5px] border-[#4D4D4D]">
                  <div className="flex flex-col items-center  ">
                    <Text size="sm" variant="bold">
                      Rueda
                    </Text>
                    <Heading size="2xl" variant="regular">
                      1
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center">
                    <Text size="sm" variant="bold">
                      Fila
                    </Text>
                    <Heading size="2xl" variant="regular">
                      1
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center">
                    <Text size="sm" variant="bold">
                      Asiento
                    </Text>
                    <Heading size="2xl" variant="regular">
                      1
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
            </div> */}
            <CardCarrito />
          </div>

          {/* Card Checkout */}
          <CardCheckout onClick={() => push('carrito/datos-de-compra')} textButton="Continuar" />
        </div>
      </LayoutCheckout>
    </div>
  )
}

export default Carrito
