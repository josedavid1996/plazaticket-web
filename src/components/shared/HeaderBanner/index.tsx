import React from 'react'
import Image from 'next/image'

const HeaderBanner = () => {
  return (
    <>
      <div className="relative h-[40vw] sm:h-[18vw] md:h-[22vw] max-h-[172px]">
        <Image
          src="/banner-asientos.png"
          layout="fill"
          className="w-full h-full"
          objectFit="cover"
        />
        <div className="w-full h-full absolute top-0">
          {/* First layer */}
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] h-full bg-tertiary-100">
            {/* Second layer */}
            <div className="w-full sm:w-[90%] h-full bg-tertiary-100 relative ">
              {/* group text image */}
              <div className="w-full h-full flex items-center z-20 relative gap-6 sm:gap-8 md:gap-[46px]">
                <div className="relative w-[50%] sm:w-[40%] h-[40%] sm:h-[80%] max-w-[210px] max-h-[120px] ml-[20px] sm:ml-[40px] md:ml-[80px] ">
                  <Image
                    src="/eventos/evento-3.png"
                    className="w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h2 className="text-white z-20 font-bold text-[26px] md:text-[36px] leading-[30px] md:leading-[54px]">
                    LOREM IPSUM
                  </h2>
                  <p className="text-sm md:text-base text-white">
                    It is a long established fact that a reader will be distracted by the readable
                    contem It is
                  </p>
                  <p className="flex flex-col text-white">
                    <span className="text-xs md:text-sm font-bold">Fernando Cano</span>
                    <span className="text-xs md:text-sm "> Jueves 24</span>
                  </p>
                </div>
              </div>
              {/* Third layer */}

              <div className="w-full sm:w-[89%] h-full bg-tertiary flex items-center absolute top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBanner
