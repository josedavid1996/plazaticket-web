import { ApolloProvider } from '@apollo/client'
import { Footer } from '@components/layout/Footer/Footer'
import { Header } from '@components/layout/Header/Header'
import ModalLogin from '@components/shared/Modales/ModalLogin'
import '@styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')

import client from 'src/apollo'
import { useStore } from 'src/store'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { isAuthenticated, onClose } = useStore((state) => state)
  return (
    <>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <Header />
          <ModalLogin isOpen={isAuthenticated} onClose={onClose} />
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
        </SessionProvider>
      </ApolloProvider>
    </>
  )
}
