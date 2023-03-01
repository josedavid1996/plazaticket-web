import React, { useState } from 'react'
import LayoutCheckout from '@components/layout/LayoutCheckout'
import Text from '@components/shared/Text'
import Input from '@components/shared/Input'
import useForm from 'src/hooks/useForm'
import CardCheckout from '@components/shared/CardCheckout'
import { useRouter } from 'next/router'

const DatosCompra = () => {
  const [isVista, setIsVista] = useState('home')
  const { values, ...form } = useForm({
    initialValues: {
      nombre: '',
      numeroDocumento: '',
      ruc: '',
      razonSocial: '',
      nombrePropietario: '',
      numeroTarjeta: '',
      fechaVencimiento: '',
      cvv: ''
    }
  })

  const { push } = useRouter()
  // Logica de los radio button
  const [currentRadioValue, setCurrentRadioValue] = useState('boleto')

  return (
    <>
      <div className="bg-[#ECECEC] pb-10">
        <LayoutCheckout>
          {/* Pagine of home */}
          {isVista === 'home' && (
            <div className="mt-4 sm:mt-8 md:mt-10 w-full bg-[#ECECEC] flex gap-9 flex-col items-center lg:flex-row ">
              <div className="w-full">
                <Text size="sm" variant="light" className="relative mb-4">
                  Selecciona tu comprobante
                </Text>

                {/* RadioButton */}
                <div className="flex justify-between max-w-[400px]">
                  <label className="radio">
                    Boleto
                    <input
                      type="radio"
                      checked={currentRadioValue === 'boleto'}
                      name="radio"
                      onChange={() => setCurrentRadioValue('boleto')}
                    />
                    <span className="check"></span>
                  </label>
                  <label className="radio">
                    Factura
                    <input
                      type="radio"
                      checked={currentRadioValue === 'factura'}
                      name="radio"
                      onChange={() => setCurrentRadioValue('factura')}
                    />
                    <span className="check"></span>
                  </label>
                </div>
                {currentRadioValue === 'boleto' ? (
                  //  Registro de datos boleto
                  <div className="mt-[35px] sm:mt-[45px] md:mt-[65px]">
                    <Text size="sm" variant="bold" className="mb-[15px] md:mb-5">
                      Registro de datos
                    </Text>

                    <form className="mt-[20px] sm:mt-[25px] md:mt-[35px] flex flex-col gap-[12px] max-w-[400px]">
                      <div className="w-full">
                        <Text size="sm" variant="light" className="">
                          Nombre completo
                        </Text>
                        <Input className="w-full" pt="pt-[6px]" {...form.inputProps('nombre')} />
                      </div>
                      <div className="w-full">
                        <Text size="sm" variant="light" className="">
                          DNI / Documento extranjero
                        </Text>
                        <Input
                          className="w-full"
                          pt="pt-[6px]"
                          {...form.inputProps('numeroDocumento')}
                        />
                      </div>
                    </form>
                  </div>
                ) : (
                  //  Registro de datos factura
                  <div className="mt-[35px] sm:mt-[45px] md:mt-[65px]">
                    <Text size="sm" variant="bold" className="mb-[15px] md:mb-5">
                      Factura
                    </Text>

                    <form className="mt-[20px] sm:mt-[25px] md:mt-[35px] flex flex-col gap-[12px] max-w-[400px]">
                      <div className="w-full">
                        <Text size="sm" variant="light" className="">
                          RUC
                        </Text>
                        <Input className="w-full" pt="pt-[6px]" {...form.inputProps('ruc')} />
                      </div>
                      <div className="w-full">
                        <Text size="sm" variant="light" className="">
                          Razón social
                        </Text>
                        <Input
                          className="w-full"
                          pt="pt-[6px]"
                          {...form.inputProps('razonSocial')}
                        />
                      </div>
                    </form>
                  </div>
                )}
              </div>
              {/* Card Checkout */}
              <CardCheckout onClick={() => setIsVista('ticket')} textButton="Continuar" />
            </div>
          )}

          {/* Pagine de Ticket */}
          {isVista === 'ticket' && (
            <div className="mt-4 sm:mt-8 md:mt-10 w-full bg-[#ECECEC] flex gap-9 flex-col  lg:flex-row items-start">
              <div className="w-full">
                {/* Registro de datos */}
                <div className="mt-[35px] sm:mt-[45px] md:mt-[65px]">
                  <Text size="sm" variant="bold" className="mb-[15px] md:mb-5">
                    ADQUIERE TUS TICKETS
                  </Text>

                  <form className="mt-[20px] sm:mt-[25px] md:mt-[35px] flex flex-col gap-[12px] max-w-[400px]">
                    <div className="w-full">
                      <Text size="sm" variant="light" className="">
                        Nombre del propietario
                      </Text>
                      <Input
                        className="w-full"
                        pt="pt-[6px]"
                        {...form.inputProps('nombrePropietario')}
                      />
                    </div>
                    <div className="w-full">
                      <Text size="sm" variant="light" className="">
                        Número de tarjeta
                      </Text>
                      <Input
                        className="w-full"
                        pt="pt-[6px]"
                        {...form.inputProps('numeroTarjeta')}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-full max-w-[170px]">
                        <Text size="sm" variant="light" className="">
                          Fecha de vencimiento
                        </Text>
                        <Input
                          className="w-full"
                          type="date"
                          pt="pt-[6px]"
                          {...form.inputProps('fechaVencimiento')}
                        />
                      </div>
                      <div className="w-full max-w-[121px]">
                        <Text size="sm" variant="light" className="">
                          Codigo CVV
                        </Text>
                        <Input className="w-full  " pt="pt-[6px]" {...form.inputProps('cvv')} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Card Checkout */}
              <CardCheckout
                onClick={() => push('/asientos/carrito/datos-de-compra/confirmacion')}
                textButton="Continuar"
              />
            </div>
          )}
        </LayoutCheckout>
      </div>

      {/* Pagine of comprobante */}
    </>
  )
}

export default DatosCompra
