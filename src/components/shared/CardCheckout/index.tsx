import Image from 'next/image'
import React from 'react'
import { useItemCarrito } from 'src/store/itemCarrito'
import Button from '../Button'
import Text from '../Text'

interface Props {
  onClick: () => void
  textButton: string
  imgPago?: boolean
}

const CardCheckout = ({ onClick, textButton, imgPago = true }: Props) => {
  const [carrito] = useItemCarrito((state) => [state.carrito])
  return (
    <>
      <div className="pt-[29px] sm:pt-[39px] md:pt-[49px] lg:pt-[59px] pb-[19px] md:pb-[39px] px-[30px] md:px-[40px]  lg:px-[50px] bg-white rounded-[18px] w-full max-w-[425px]">
        <Text size="sm" variant="bold" className="mb-[15px] md:mb-5">
          Resumen de compra
        </Text>

        {/* Resumen */}
        <div className="mb-[16px] md:mb-[20px]">
          {carrito.map((item, index) => (
            <div key={index} className="flex justify-between">
              <Text size="base" variant="paragraph">
                Tendido {item.tendido}
              </Text>
              <Text size="sm" variant="bold">
                $75
              </Text>
            </div>
          ))}
          {/* <div className="flex justify-between">
            <Text size="base" variant="paragraph">
              2 Ruedo 1
            </Text>
            <Text size="sm" variant="bold">
              $**
            </Text>
          </div> */}
        </div>

        {/* Total */}
        <div className="overflow-hidden mb-[17px]">
          <Text
            size="sm"
            variant="light"
            className="relative after:ml-[6px] after:content-[''] after:w-full  after:h-[1px] after:absolute after:bg-tertiary after:top-[10px]">
            Total
          </Text>
          <Text size="sm" variant="bold" className="text-end">
            ${carrito.length * 75}
          </Text>
        </div>

        {/* Pagos */}
        <div className={`${imgPago ? 'block' : 'hidden'} mb-[23px] md:mb-[43px]`}>
          <Text size="sm" variant="light" className="relative mb-4">
            Puedes pagar con
          </Text>
          <Image src="/pagos.png" width={182} height={46} />
        </div>
        <div className="flex justify-center">
          <Button text={textButton} onClick={onClick} />
        </div>
      </div>
    </>
  )
}

export default CardCheckout
