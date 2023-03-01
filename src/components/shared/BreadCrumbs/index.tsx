import { useRouter } from 'next/router'
import React, { Fragment, ReactNode } from 'react'
import Icon from '../icon'
interface IProps {
  history?: { description: string | ReactNode; url?: string }[]
  textsBreadCrumbs?: any
}
interface IPropsHref {
  children: ReactNode
  url?: string
  className?: string
}

export const BreadCrumbs = ({ history }: IProps) => {
  const { push } = useRouter()
  const Href = ({ children, url, className = 'text-black' }: IPropsHref) => (
    <div
      onClick={() => (typeof url !== 'undefined' ? push(url) : null)}
      className={`${className} cursor-pointer  text-[13px] dark:text-white`}>
      {children}
    </div>
  )
  return (
    <div className=" w-full flex justify-start font-poppins ">
      <div className="text-sm font-medium text-white flex flex-row items-center gap-[6px] flex-wrap  dark:text-white">
        {history?.map((obj, k) => (
          <Fragment key={k}>
            <Href
              className={`${history.length - 1 === k ? 'text-tertiary' : 'text-[#4D4D4D]'}`}
              url={obj?.url || undefined}>
              {obj.description || ''}
            </Href>
            {history.length - 1 !== k && (
              <Icon name="slash" className="text-[#4D4D4D] dark:text-white text-[12px]" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
