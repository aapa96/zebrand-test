
import { LoaderProvider } from '../context/loader'
import { UIProvider } from '../context/ui'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <LoaderProvider>
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  </LoaderProvider>
}

export default MyApp
