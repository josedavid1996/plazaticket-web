import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api-dev.plazaticket.com/public' + '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const mode: { [key: string]: string } = {
  /** ambiente de pruebas */
  desarrollo: process.env.NEXT_PUBLIC_DESARROLLO || '',

  /** ambiente para el usuario final */
  produccion: process.env.NEXT_PUBLIC_PRODUCTION || ''
}
export const URI = mode[process.env.NEXT_PUBLIC_MODE || 'desarrollo']

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
