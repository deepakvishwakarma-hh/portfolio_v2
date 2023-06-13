import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import { PageTransition } from 'next-page-transitions'
const TIMEOUT = 400
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class" >
      <Provider store={store}>
        <Layout>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0,
            }}
            loadingClassNames="loading-indicator"
          >
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
