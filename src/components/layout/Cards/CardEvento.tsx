import Button from '@components/shared/Button'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  image: string
  title: string
  description: string
  date: { fechaInitial: string; fechaFinal: string }
  price: number
  slug: string
}

const CardEvento = (props: Props) => {
  const { push } = useRouter()
  return (
    <article className="flex flex-col lg:flex-row justify-center gap-4  md:gap-[39px] rounded-[5px] bg-light overflow-hidden lg:pr-[28px] ">
      <Image
        className="object-cover  "
        src={props.image}
        alt={props.title}
        width={250}
        height={170}
      />
      <div className="flex flex-col w-full md:flex-row md:gap-6 pb-4 px-4 lg:px-0">
        <div className="flex flex-col justify-between flex-1 pt-6 ">
          <h2 className="title-card-evento">{props.title}</h2>
          <p className="description-card-evento">{props.description}</p>
          <span className="date-card-evento">
            {moment(props.date.fechaInitial).format('DD MMM')} /{' '}
            {moment(props.date.fechaFinal).format('DD MMM YYYY')}
          </span>
          {/* <span className="date-card-evento">{props.date}</span> */}
        </div>
        <div className="self-center">
          <p className="pb-2 text-center text-card-evento-color text-tertiary">
            Desde ${props.price}
          </p>
          {/* <button
            className="p-2 text-white rounded-lg button-card-evento bg-tertiary w-36"
            onClick={() => push('/feria/daddy-yanke')}>
            Comprar
          </button> */}
          <Button text="Comprar" onClick={() => push(`/feria/${props.slug}`)} />
        </div>
      </div>
    </article>
  )
}

export default CardEvento
