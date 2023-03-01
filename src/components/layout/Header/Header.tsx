import React, { useState, useEffect } from 'react'
import Icon from '@components/shared/icon'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStore } from 'src/store'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const { onToggle } = useStore((state) => state)
  const { status } = useSession()

  const { push, pathname } = useRouter()

  useEffect(() => {
    setIsMenu(false)
  }, [pathname])

  // Funcion para cerrar session

  const handleSignOut = async () => {
    setIsMenu(false)
    await signOut({ redirect: true }).then(() => {
      localStorage.removeItem('token')
    })
  }

  return (
    <header className="bg-secondary ">
      <nav className="container-max flex justify-between pt-[10px] pb-2  pl-[15px] pr-[18px]">
        <Link href="/">
          <div className="relative w-[200px] h-[50px]  md:w-[248px] md:h-[63px] cursor-pointer">
            <Image layout="fill" className="w-full h-full" src="/logo.png" alt="logo" />
          </div>
        </Link>
        <div className="flex gap-4 md:gap-8">
          <button className="relative">
            <Icon
              name="user"
              className="w-[20px] h-[23px] md:w-[32px] md:h-[35px] text-white"
              onClick={() => {
                if (status === 'authenticated') {
                  setIsMenu(!isMenu)
                }
                if (status === 'unauthenticated') {
                  onToggle()
                }
              }}
            />
            <div
              className={`${
                isMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              } w-[218px] h-[187px] bg-white rounded-[11px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-center  absolute z-40 right-0 gap-3 top-[40px] md:top-[52px] e transition-all duration-500`}>
              <p
                className="hover:bg-tertiary py-2 hover:text-white transition-all duration-500"
                onClick={() => push('/mis-datos')}>
                Mis datos
              </p>
              <p className="hover:bg-tertiary py-2 hover:text-white transition-all duration-500">
                Mis compras
              </p>
              <p
                className="hover:bg-tertiary py-2 hover:text-white transition-all duration-500"
                onClick={handleSignOut}>
                Cerrar sesión
              </p>
            </div>
          </button>
          <button onClick={() => push('/asientos/carrito')}>
            <Icon name="cart" className="w-[20px] h-[23px] md:w-[32px] md:h-[35px] text-white" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export { Header }
