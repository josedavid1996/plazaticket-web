import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

import Button from '@components/shared/Button'
import Input from '@components/shared/Input'
import Modal from '@components/shared/Modal'
import Select, { Option } from '@components/shared/Select'
import useForm, { FormError } from 'src/hooks/useForm'
import { Toast } from '@utils/Toast'
import Icon from '@components/shared/icon'
import Text from '@components/shared/Text'
import { ErrorMessages } from '@utils/messages'
import { isEmail, isEmpty } from '@utils/index'
import { useAuth } from 'src/services/useAuth'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalLogin = ({ isOpen, onClose }: Props) => {
  const [isEstado, setIsEstado] = useState('login')
  const { status, data } = useSession() as any
  const { createUser, recoverPassword } = useAuth()
  const { values, ...form } = useForm({
    initialValues: {
      email: '',
      password: '',
      nombres: '',
      apellidos: '',
      tipoDocumento: '',
      celular: '',
      numeroDocumento: ''
    },
    validate: (values) => {
      const errors: FormError<typeof values> = {}

      // Validacion del login
      if (isEmpty(values.email) && (isEstado === 'login' || isEstado === 'register'))
        errors.email = ErrorMessages.empty
      if (
        !isEmail(values.email) &&
        (isEstado === 'login' || isEstado === 'register' || isEstado === 'recuperar')
      )
        errors.email = ErrorMessages.badEmail

      // Validacion del register
      if (isEmpty(values.nombres) && isEstado === 'register') errors.nombres = ErrorMessages.empty
      if (isEmpty(values.apellidos) && isEstado === 'register')
        errors.apellidos = ErrorMessages.empty
      if (isEmpty(values.tipoDocumento) && isEstado === 'register')
        errors.tipoDocumento = ErrorMessages.empty
      if (isEmpty(values.password) && isEstado === 'register') errors.password = ErrorMessages.empty
      if (isEmpty(values.celular) && isEstado === 'register') errors.celular = ErrorMessages.empty
      if (isEmpty(values.numeroDocumento) && isEstado === 'register')
        errors.numeroDocumento = ErrorMessages.empty

      return errors
    }
  })

  useEffect(() => {
    if (status === 'authenticated') {
      localStorage.setItem('token', data?.user?.apiToken)
      localStorage.setItem('user', JSON.stringify(data?.user))
    }
  }, [status])

  const handleSubmit = async () => {
    if (isEstado === 'login') {
      await signIn('credentials', {
        redirect: false,
        ...values
      })
        .then((res) => {
          if (res?.ok) {
            onClose()
            form.clear()
            // location.reload()
            console.log(res)
            Toast({ type: 'success', message: 'Bienvenido' })
          } else {
            Toast({ type: 'error', message: res?.error! })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

    if (isEstado === 'register') {
      const res = await createUser({
        nombres: values.nombres,
        apellidos: values.apellidos,
        email: values.email,
        tipoDocumento: values.tipoDocumento,
        numeroDocumento: values.numeroDocumento,
        celular: values.celular,
        password: values.password
      })

      if (res.res) {
        onClose()
        form.clear()
        Toast({ type: 'success', message: 'Usuario creado' })
      } else {
        Toast({ type: 'error', message: res.response })
      }
      // console.log(res)
    }

    if (isEstado === 'recuperar') {
      const res = await recoverPassword(values.email)

      if (res.res) {
        Toast({
          type: 'success',
          message: 'Si posees un correo registrado recibirás tu nueva contraseña.'
        })
        onClose()
        form.clear()
      } else {
        Toast({ type: 'error', message: res.response })
      }
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="h-full overflow-auto bg-white ">
          <div className="bg-white pt-[26px] pl-[47px] pr-[33px] pb-[40px] flex flex-col w-full sm:w-[100vw] max-w-[576px]  items-center max-h-[80vh]">
            <Image src="/logo-login.png" width={177} height={155} objectFit="contain" />
            <h2 className="relative text-tertiary font-bold text-lg md:text-2xl text-center mb-[30px] md:mb-[50px] w-full">
              {(isEstado === 'register' || isEstado === 'recuperar') && (
                <div
                  className="absolute left-0 top-0 flex gap-2 items-center cursor-pointer"
                  onClick={() => {
                    setIsEstado('login'), form.clear()
                  }}>
                  <Icon name="arrow-left" className="text-sm" />
                  <Text size="sm">Atrás</Text>
                </div>
              )}
              {isEstado === 'login'
                ? 'Iniciar Sesión'
                : isEstado === 'register'
                ? 'CREAR CUENTA'
                : 'Recuperar'}
            </h2>
            <form
              className="w-full flex flex-col gap-5 md:gap-7 pb-5"
              onSubmit={form.onSubmit(handleSubmit)}>
              {/* Inputs para login */}
              {isEstado === 'login' && (
                <>
                  <Input className="w-full" label="Correo" {...form.inputProps('email')} />
                  <Input
                    type="password"
                    className="w-full"
                    label="Contraseña"
                    {...form.inputProps('password')}
                  />
                  <div className="flex justify-between">
                    <span className="flex gap-[10px] md:gap-[15px]">
                      <input type="checkbox" />
                      Recuerdame
                    </span>
                    <p
                      className="text-tertiary text-sm cursor-pointer"
                      onClick={() => setIsEstado('recuperar')}>
                      ¿olvidaste la contraseña?
                    </p>
                  </div>
                </>
              )}
              {/* Inputs para regristrarse */}
              {isEstado === 'register' && (
                <>
                  <Input className="w-full" label="Nombres" {...form.inputProps('nombres')} />
                  <Input className="w-full" label="Apellidos" {...form.inputProps('apellidos')} />
                  <Input
                    className="w-full"
                    label="Correo electrónico"
                    {...form.inputProps('email')}
                  />
                  <Input
                    type="password"
                    className="w-full"
                    label="Contraseña"
                    {...form.inputProps('password')}
                  />
                  <Input
                    className="w-full"
                    label="Celular"
                    {...form.inputProps('celular')}
                    pattern="[0-9]{0,9}"
                    onChange={(e) => {
                      e.target.validity.valid && form.setField('celular', e.target.value)
                    }}
                  />
                  <Select
                    className="bg-white w-full rounded-[4px] border-[0.5px] border-tertiary"
                    {...form.inputProps('tipoDocumento')}>
                    <Option value="" disabled hidden>
                      Tipo de documento
                    </Option>
                    <Option value="dni">DNI</Option>
                    <Option value="dni">CE</Option>
                  </Select>
                  <Input
                    className="w-full"
                    label="Numero de documento"
                    {...form.inputProps('numeroDocumento')}
                    pattern="[0-9]{0,11}"
                    onChange={(e) => {
                      e.target.validity.valid && form.setField('numeroDocumento', e.target.value)
                    }}
                  />

                  <div className="flex justify-center">
                    <div className="flex flex-col items-start gap-[8px]">
                      <span className="flex gap-[10px] md:gap-[15px]">
                        <input type="checkbox" />
                        Acepto los términos y condiciones
                      </span>
                      <span className="flex gap-[10px] md:gap-[15px]">
                        <input type="checkbox" />
                        Politicas de privacidad
                      </span>
                      <span className="flex gap-[10px] md:gap-[15px]">
                        <input type="checkbox" />
                        Declaro ser mayor de edad
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Inputs para recuperar contraseña */}

              {isEstado === 'recuperar' && (
                <Input
                  className="w-full"
                  label="Correo electrónico"
                  {...form.inputProps('email')}
                />
              )}

              <Button
                text={
                  isEstado === 'login' ? 'Ingresar' : isEstado === 'register' ? 'Crear' : 'Enviar'
                }
              />
              <p
                className="text-sm text-tertiary text-center cursor-pointer"
                onClick={() => {
                  setIsEstado('register'), form.clear()
                }}>
                {isEstado === 'login'
                  ? 'Registrarme'
                  : isEstado === 'register'
                  ? 'Solo recopilamos tus datos con fines de personalización. Protegemos tu privacidad.'
                  : ''}
              </p>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalLogin
