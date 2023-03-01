import Button from '@components/shared/Button'
import Input from '@components/shared/Input'
import Modal from '@components/shared/Modal'
import Select, { Option } from '@components/shared/Select'
import useForm, { FormError } from '@hooks/useForm'
import { isEmpty } from '@utils/index'
import { ErrorMessages } from '@utils/messages'
import { Toast } from '@utils/Toast'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useUsuarioService } from 'src/services/useUsuarioService'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalUpdaUsu = ({ isOpen, onClose }: Props) => {
  const { updateUsuario } = useUsuarioService()
  //? Cambiar el usuario con la query
  const { data } = useSession() as any
  const { values, setFields, ...form } = useForm({
    initialValues: {
      nombres: '',
      apellidos: '',
      tipoDocumento: '',
      numeroDocumento: '',
      celular: ''
    },
    validate: (values) => {
      const errors: FormError<typeof values> = {}
      if (isEmpty(values.nombres)) errors.nombres = ErrorMessages.empty
      if (isEmpty(values.apellidos)) errors.apellidos = ErrorMessages.empty
      if (isEmpty(values.tipoDocumento)) errors.tipoDocumento = ErrorMessages.empty
      if (isEmpty(values.numeroDocumento)) errors.numeroDocumento = ErrorMessages.empty
      if (isEmpty(values.celular)) errors.celular = ErrorMessages.empty

      // Validacion del login

      return errors
    }
  })

  useEffect(() => {
    setFields({
      nombres: data?.user?.nombres,
      apellidos: data?.user?.apellidos,
      celular: data?.user?.celular,
      tipoDocumento: data?.user?.tipoDocumento,
      numeroDocumento: data?.user?.numeroDocumento
    })
  }, [data])

  const handleSubmit = async () => {
    const res = await updateUsuario({
      nombres: values.nombres,
      apellidos: values.apellidos,
      celular: values.celular,
      tipoDocumento: values.tipoDocumento,
      numeroDocumento: values.numeroDocumento
    })

    if (res.res) {
      onClose()
      form.clear()
      Toast({ type: 'success', message: 'Se actualizo el usuario' })
    } else {
      Toast({ type: 'error', message: res.response })
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pt-[56px] px-[20px] md:px-[70px] pb-5 mx-4 w-[90vw] max-w-[800px]">
          <h2 className=" text-tertiary font-bold text-lg md:text-2xl text-center mb-[15px] md:mb-[30px] w-full">
            Actualizar usuario
          </h2>
          <form className="flex flex-col items-center" onSubmit={form.onSubmit(handleSubmit)}>
            <div className="w-full grid grid-cols-1   gap-5 md:gap-7 pb-5 ">
              <div className="grid grid-cols-1 xmd:grid-cols-2 gap-5 md:gap-7">
                <Input
                  className="w-full"
                  type="text"
                  label="Nombres"
                  {...form.inputProps('nombres')}
                />
                <Input
                  className="w-full"
                  type="text"
                  label="Apellidos"
                  {...form.inputProps('apellidos')}
                />
              </div>
              <div className="grid grid-cols-1 xmd:grid-cols-3 gap-5 md:gap-7">
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
                  <Option value="cd">CE</Option>
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
              </div>
            </div>

            <Button text="Enviar" />
          </form>
        </div>
      </Modal>
    </>
  )
}

export default ModalUpdaUsu
