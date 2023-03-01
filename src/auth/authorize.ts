import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export const AUTHORIZE = async (ctx: GetServerSidePropsContext, callback?: Function) => {
  const session = await getSession(ctx)
  if (session === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: {}
    }
  }
  if (typeof callback === 'function') {
    callback(ctx)
  }
  return {
    props: {}
  }
}
