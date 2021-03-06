import '../styles/globals.css'
// import type { AppProps } from 'next/app'

import { ToastProvider } from '../context/toastContext'

function MyApp({ Component, pageProps }) {
  return(
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
