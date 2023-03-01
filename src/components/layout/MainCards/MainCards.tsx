import CardEvento from '@components/layout/Cards/CardEvento'
import Searcher from '@components/shared/Searcher'
import { Show } from '@components/shared/Show'
import { SkeletorFerias } from '@components/shared/Skeletors/SkeletorFerias'
import { dataEvento } from '@data/dataEvento'
import React from 'react'
import { useFeriaService } from 'src/services/useFeriaService'
import { Container } from '../Container/Container'

const MainCards = () => {
  const { dataFeria, loading } = useFeriaService()

  const dataEvento = dataFeria.map((item) => ({
    image: item.imagenPrincipal?.url!,
    title: item.titulo!,
    description: item.descripcionLarga!,
    date: { fechaInitial: item.fechaInicial!, fechaFinal: item.fechaFinal! },
    price: 35,
    slug: item.slug!
  }))
  return (
    <div className="bg-light">
      <Container
        tag="section"
        className="flex flex-col  gap-10 bg-white px-[20px]  sm:px-[50px] md:px-[70px] lg:px-[127px] w-full pb-[20px] sm:pb-[60px] md:pb-[80px] lg:pb-[122px]">
        <Searcher />
        <Show condition={!loading} isDefault={<SkeletorFerias />}>
          {dataEvento?.map((item, index) => (
            <CardEvento {...item} key={index} />
          ))}
        </Show>
      </Container>
    </div>
  )
}

export default MainCards
