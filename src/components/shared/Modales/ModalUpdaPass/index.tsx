import Button from '@components/shared/Button'
import Input from '@components/shared/Input'
import Modal from '@components/shared/Modal'
import useForm, { FormError } from '@hooks/useForm'
import { isEmpty } from '@utils/index'
import { ErrorMessages } from '@utils/messages'
import { Toast } from '@utils/Toast'
import React from 'react'
import { useAuth } from 'src/services/useAuth'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalUpdaPass = ({ isOpen, onClose }: Props) => {
  const { updatePassword } = useAuth()

  const { values, ...form } = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: ''
    },
    validate: (values) => {
      const errors: FormError<typeof values> = {}
      if (isEmpty(values.oldPassword)) errors.oldPassword = ErrorMessages.empty
      if (isEmpty(values.newPassword)) errors.newPassword = ErrorMessages.empty
      if (values.newPassword === values.oldPassword)
        errors.newPassword = 'No puedes poner tu contraseña actual'

      // Validacion del login

      return errors
    }
  })

  const handleSubmit = async () => {
    const res = await updatePassword({
      passwordAntiguo: values.oldPassword,
      passwordNuevo: values.newPassword
    })

    if (res.res) {
      onClose()
      form.clear()
      Toast({ type: 'success', message: 'Se actualizo la contraseña' })
    } else {
      Toast({ type: 'error', message: res.response })
    }
  }
  return (
    <>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <div className="bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pt-[56px] px-[20px] md:px-[70px] pb-5 mx-4">
            <h2 className=" text-tertiary font-bold text-lg md:text-2xl text-center mb-[15px] md:mb-[30px] w-full">
              Cambiar de contraseña
            </h2>
            <form
              className="w-full flex flex-col gap-5 md:gap-7 pb-5"
              onSubmit={form.onSubmit(handleSubmit)}>
              {/* Inputs para cambiar contraseña */}

              <>
                <Input
                  className="w-full"
                  type="password"
                  label="Nueva contraseña"
                  {...form.inputProps('newPassword')}
                />
                <Input
                  className="w-full"
                  type="password"
                  label="Antigua contraseña"
                  {...form.inputProps('oldPassword')}
                />
              </>

              <Button text="Enviar" />
            </form>
          </div>
        </Modal>
      </>
    </>
  )
}

export default ModalUpdaPass
