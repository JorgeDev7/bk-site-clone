import '@/styles/globals.css'
import { BkProvider } from '../../context/BkProvider'

export default function App({ Component, pageProps }) {
  return (
    <BkProvider>
      <Component {...pageProps} />
    </BkProvider>
  )
}
