import LayoutCheckout from '@components/layout/LayoutCheckout'
import Heading from '@components/shared/Heading'
import Icon from '@components/shared/icon'
import Text from '@components/shared/Text'
import React from 'react'
import { useItemCarrito } from 'src/store/itemCarrito'

const Confirmacion = () => {
  const [carrito] = useItemCarrito((state) => [state.carrito])
  return (
    <div className="bg-[#ECECEC] pb-10">
      <LayoutCheckout>
        <div className="mt-4 sm:mt-8 md:mt-10 w-full bg-[#ECECEC] flex justify-center items-center ">
          <div className="flex justify-center items-center flex-col">
            <Heading size="2xl" className="mb-[31px] sm:mb-[41px]  md:mb-[51px]">
              Compra exitosa{' '}
            </Heading>
            <Icon
              name="shield-check"
              className="text-tertiary text-[117px] mb-[27px] sm:mb-[37px]  md:mb-[47px]"
            />
            <Text size="sm" color="tertiary" variant="bold">
              Tu pago por ${carrito.length * 75} ha sido realizado
            </Text>
            <div className="mt-[18px] sm:mt-[20px] md:mt-[25px]">
              <Text size="base">Número de operación 0092736452</Text>
              <div className="flex flex-col gap-[11px] mt-[18px] sm:mt-[20px] md:mt-[25px]">
                <div className="flex justify-between">
                  <Text size="sm" variant="light">
                    Fecha
                  </Text>
                  <Text size="sm" variant="light">
                    12/ 01/ 2023
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text size="sm" variant="light">
                    Monto
                  </Text>
                  <Text size="sm" variant="light">
                    ${carrito.length * 75}
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text size="sm" variant="light">
                    F. de Pago VISA
                  </Text>
                  <Text size="sm" variant="light">
                    2343523***0028
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutCheckout>
    </div>
  )
}

export default Confirmacion
