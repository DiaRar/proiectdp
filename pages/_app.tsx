import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}
export default MyApp
