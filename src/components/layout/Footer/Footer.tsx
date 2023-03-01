import React from 'react'
import Image from 'next/image'
import { IconFacebook } from '@icons/IconFacebook'
import { IconInstagram } from '@icons/IconInstagram'
import { IconLinkedin } from '@icons/IconLinkedin'

const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col ">
      <div className="flex gap-10 justify-between px-[47px] pt-12 text-white pb-7 container-max w-full flex-col sm:flex-row">
        <div className="flex flex-col items-center ">
          <div>
            <figure>
              <Image src="/logo.png" width={177} height={40} alt="logo" />
            </figure>
            <p className="text-footer w-[200px] ">
              It is a long established fact that a reader will be distracted by the readable
            </p>
          </div>
          <div className=" mt-[26px]">
            <div className="flex items-center justify-center gap-2 pt-1 text-white text-opacity-40 ">
              <IconFacebook className="w-[28px] h-[30px] " />
              <IconInstagram className="w-[29px] h-[30px]" />
              <IconLinkedin className="w-[28px] h-[28px] " />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 w-full ">
          <div>
            <h2 className="pt-2 pb-5 text-footer-h2 text-center md:text-left">Lorem ipsum</h2>
            <div className=" text-footer text-center md:text-left">
              <p>Correo</p>
              <p>télefono</p>
              <p>Guides</p>
              <p>Examples</p>
              <p>Docs</p>
            </div>
          </div>
          <div>
            <h2 className="pt-2 pb-5 text-footer-h2 text-center md:text-left">Lorem ipsum</h2>
            <div className=" text-footer text-center md:text-left">
              <p>Correo</p>
              <p>télefono</p>
              <p>Guides</p>
              <p>Examples</p>
              <p>Docs</p>
            </div>
          </div>
          <div>
            <h2 className="pt-2 pb-5 text-footer-h2 text-center md:text-left">Lorem ipsum</h2>
            <div className=" text-footer text-center md:text-left">
              <p>Correo</p>
              <p>télefono</p>
              <p>Guides</p>
              <p>Examples</p>
              <p>Docs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex justify-between text-white container-max px-3.5 pt-6 pb-[11px]">
          <p className="text-footer-small">@All rights reserved</p>
          <p className="text-footer-small">Design by IDEAS Avenue</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
