import { AppProps } from 'next/app'

import Navbar from '@components/Navbar'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="px-8 m-auto my-4 prose lg:prose-xl sm:my-16">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
