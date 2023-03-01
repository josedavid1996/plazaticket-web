import React from 'react'
import Button from '@components/shared/Button'
import useToggle from 'src/hooks/useToggle'
import Icon from '@components/shared/icon'
import { Container } from '@components/layout/Container/Container'
import { GetServerSidePropsContext } from 'next'
import { AUTHORIZE } from 'src/auth/authorize'
import { Seo } from '@components/shared/Seo/Index'
import ModalUpdaPass from '@components/shared/Modales/ModalUpdaPass'
import ModalUpdaUsu from '@components/shared/Modales/ModalUpdaUsu'
import { useSession } from 'next-auth/react'

const MisDatos = () => {
  const { isOpen, onOpen, onClose } = useToggle()
  const {
    isOpen: isOpenUpdateUsuario,
    onOpen: onOpenUpdateUsuario,
    onClose: onCloseUpdateUsuario
  } = useToggle()

  const dataSeo = {
    tittlePage: 'Mis Datos',
    description: '',
    url: '',
    keywords: '',
    imgPrincipal: ''
  }
  //? Cambiar el usuario con la query
  const { data } = useSession() as any

  return (
    <>
      <Seo data={dataSeo} />
      <Container className="my-[20px] sm:my-[72px] md:my-[92px] relative">
        <Icon
          name="edit"
          className="absolute top-0 right-0 text-[20px] md:text-[29px] cursor-pointer"
          onClick={() => onOpenUpdateUsuario()}
        />
        <h2 className="text-2xl font-bold mb-10">Mis Datos</h2>

        <div className="flex flex-col gap-4 sm:gap-8 md:gap-12">
          <div className="flex gap-14 md:gap-20">
            <p className="font-bold text-base">Nombre</p>
            <p className=" text-base">{data?.user.nombres} </p>
          </div>
          <div className="flex gap-14 md:gap-20">
            <p className="font-bold text-base">Apellido</p>
            <p className=" text-base">{data?.user.apellidos}</p>
          </div>
          <div className="flex gap-14 md:gap-20">
            <p className="font-bold text-base">Correo</p>
            <p className=" text-base">{data?.user.email}</p>
          </div>
          <div className="flex gap-14 md:gap-20">
            <p className="font-bold text-base">Contraseña</p>
            <p className=" text-base">************</p>
          </div>
        </div>
        <div onClick={() => onOpen()} className="mt-10 flex justify-center">
          <Button text="Cambiar de contraseña" />
        </div>
      </Container>
      <ModalUpdaPass isOpen={isOpen} onClose={onClose} />
      <ModalUpdaUsu isOpen={isOpenUpdateUsuario} onClose={onCloseUpdateUsuario} />
    </>
  )
}

export default MisDatos
export const getServerSideProps = (ctx: GetServerSidePropsContext) => AUTHORIZE(ctx)
