import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import { PageTransition as Transition } from 'next-page-transitions'

// import Cursor from '@/components/Cursor'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

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
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="75, 108, 193"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <Layout>
          <Transition {...TransitionProps}>
            <Component {...pageProps} />
          </Transition>
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
