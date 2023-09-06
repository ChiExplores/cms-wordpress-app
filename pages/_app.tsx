import { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="font-body">
      <Component {...pageProps} />
    </div>
}

export default MyApp
