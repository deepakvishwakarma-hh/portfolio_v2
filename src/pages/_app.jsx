import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import { PageTransition as Transition } from 'next-page-transitions'

export default function App({ Component, pageProps }) {
  const TIMEOUT = 400
  const TransitionProps = {
    timeout: TIMEOUT,
    classNames: "page-transition",
    loadingDelay: 500,
    loadingTimeout: {
      enter: TIMEOUT,
      exit: 0,
    },
    loadingClassNames: "loading-indicator"
  }
  return (
    <ThemeProvider defaultTheme='dark' attribute="class" >
      <Provider store={store}>
        <Layout>
          <Transition {...TransitionProps}>
            <Component {...pageProps} />
          </Transition>
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
