import Banner from '@components/shared/Banner/Banner'
import MainCards from '@components/layout/MainCards/MainCards'
import { Seo } from '@components/shared/Seo/Index'

export default function Home() {
  const dataSeo = {
    tittlePage: 'Plazaticket',
    description: '',
    url: '',
    keywords: '',
    imgPrincipal: ''
  }

  return (
    <>
      <Seo data={dataSeo} />
      <Banner />

      <MainCards />
    </>
  )
}
