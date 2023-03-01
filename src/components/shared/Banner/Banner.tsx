import { Container } from '@components/layout/Container/Container'
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-banner ">
      <Container className="flex items-center h-full">
        <h1 className="text-white title-h1">ELIGE TU EVENTO</h1>
      </Container>
    </div>
  )
}

export default Banner
