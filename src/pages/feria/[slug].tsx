import React from 'react'
import { Container } from '@components/layout/Container/Container'
import { BreadCrumbs } from '@components/shared/BreadCrumbs'
import request from 'graphql-request'
import Icon from '@components/shared/icon'
import { Seo } from '@components/shared/Seo/Index'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { mode } from '@apollo/index'
import { Feria, GetFeriaSlugDocument } from '@generated/graphql'

interface Props {
  data: Feria
}

const FechaSlug = ({ data }: Props) => {
  const { push } = useRouter()

  const dataSeo = {
    tittlePage: 'feria',
    description: '',
    url: '',
    keywords: '',
    imgPrincipal: ''
  }
  return (
    <>
      <Seo data={dataSeo} />
      <div>
        {/* Banner  */}
        <div className="relative h-[45vw] xsm:h-[38vw] sm:h-[25vw] md:h-[32vw] max-h-[317px]">
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
                  {/* <div className="relative w-[50%] sm:w-[40%] h-[40%] sm:h-[80%] max-w-[210px] max-h-[120px] ml-[20px] sm:ml-[40px] md:ml-[80px] ">
                    <Image
                      src="/eventos/evento-3.png"
                      className="w-full h-full"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div> */}

                  <div className=" p-2  md:pl-[100px] md:pr-0 max-w-[400px]">
                    <h2 className="text-white z-20 font-bold text-[26px] md:text-[36px] leading-[30px] md:leading-[54px]">
                      LOREM IPSUM
                    </h2>
                    <p className="text-sm md:text-base text-white">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The It is a long established
                      fact that a reader will be dis readable content of a page when loo.
                    </p>
                    {/* <p className="flex flex-col text-white">
                      <span className="text-xs md:text-sm font-bold">Fernando Cano</span>
                      <span className="text-xs md:text-sm "> Jueves 24</span>
                    </p> */}
                  </div>
                </div>
                {/* Third layer */}

                <div className="w-full sm:w-[89%] h-full bg-tertiary flex items-center absolute top-0"></div>
              </div>
            </div>
          </div>
        </div>
        <Container className="mt-[20px] md:mt-[43px] rounded-[5px] mb-[60px]  sm:mb-[80px] md:mb-[134px] lg:mb-[164px]">
          <BreadCrumbs
            history={[
              { description: 'Home', url: '/' },
              {
                description: 'Fecha',
                url: ''
              }
            ]}
          />
          <div className="px-5 sm:px-8 md:px-10 lg:px-20 mt-[20px] md:mt-[43px]">
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-[40px] sm:mb-[80px] md:mb-[102px]">
              <div
                className="w-auto px-5 py-2 text-center border-[0.75px]  rounded-[5px] hover:bg-tertiary cursor-pointer hover:text-white transition-all duration-300 hover:border-tertiary"
                onClick={() => push('/asientos')}>
                <h3 className="font-bold text-xl md:text-2xl">PACO DE LUCIA</h3>
                <p className="text-base">VIERNES 16</p>
              </div>
              <div className="w-auto px-5 py-2 text-center border-[0.75px] border-gray rounded-[5px] hover:bg-tertiary cursor-pointer hover:text-white transition-all duration-300 hover:border-tertiary">
                <h3 className="font-bold text-xl md:text-2xl">FERNANDO CANO</h3>
                <p className="text-base">JUEVES 24</p>
              </div>
              <div className="w-auto px-5 py-2 text-center border-[0.75px] border-gray rounded-[5px] hover:bg-tertiary cursor-pointer hover:text-white transition-all duration-300 hover:border-tertiary">
                <h3 className="font-bold text-xl md:text-2xl">ROBERTO PALACIOS</h3>
                <p className="text-base">MIÉRCOLES 30</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] sm:gap-[70px] md:gap-[100px] lg:gap-[124px]">
            {/* Texto Mapa tendido */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
              <p className="text-lg md:text-2xl">
                Lorem ipsum dolor sit amet. Nam ducimus dolores et expedita deleniti et iusto quia
                non ipsam neque. Et repellendus magni eum accusantium laborum non beatae cupiditate
                qui voluptates voluptas. 33 quia architecto est deleniti unde ut debitis quibusdam
                et debitis autem ut deserunt magni.
              </p>
              <Image src="/mapa-tendido.svg" width={100} height={100} layout="responsive" />
            </div>

            {/* Texto Mapa  */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 items-center gap-5">
              <p className=" md:text-base">
                Lorem ipsum dolor sit amet. Nam ducimus dolores et expedita deleniti et iusto quia
                non ipsam neque. Et repellendus magni eum accusantium laborum non beatae cupiditate
                qui voluptates voluptas. 33 quia architecto est deleniti unde ut debitis quibusdam
                et debitis autem ut deserunt magni.
              </p>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-[438px] h-[237px] ">
                  <Image
                    className="w-full h-full "
                    src="/mapa.png"
                    width={50}
                    height={100}
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default FechaSlug

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const URI = mode[process.env.NEXT_PUBLIC_MODE || 'desarrollo']
  try {
    const { GetFeriaSlug } = await request(URI, GetFeriaSlugDocument, {
      slug: query.slug
    })
    return {
      props: { data: GetFeriaSlug }
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }
}
