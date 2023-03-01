import request from 'graphql-request'
import NextAuth, { AuthOptions, RequestInternal } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { URI } from 'src/apollo'
// import { useDispatch } from 'react-redux'

const LOGIN_AUTH = `mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    estado
    apiToken
  }
}`
export const AuhtOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        try {
          const res = await request(URI, LOGIN_AUTH, {
            input: {
              email: credentials?.email,
              password: credentials?.password
            }
          })
          if (res) {
            return res
          }
          return
        } catch (error: any) {
          throw new Error(error.response.errors[0].debugMessage)
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    strategy: 'jwt'
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user

      // const dispatch = useDispatch()
      // dispatch(SetAuth(session.user))
      return session
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user
      }

      return token
    }
  }
}

export default NextAuth(AuhtOptions)
