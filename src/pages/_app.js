import '@/styles/globals.css'
import { BkProvider } from '../../context/bkProvider'

export default function App({ Component, pageProps }) {
  return (
    <BkProvider>
      <Component {...pageProps} />
    </BkProvider>
  )
}
