import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
// import Layout from '@/components/NewLayout'

import Locomotive from '@/components/LocomotiveLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class" >
      <Provider store={store}>
        <Layout>
          <Locomotive>
            <Component {...pageProps} />
          </Locomotive>
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
