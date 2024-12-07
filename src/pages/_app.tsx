// This is the main App component for the Next.js application
// It wraps all pages with global styles and context providers

// Import global CSS styles
import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// Import ToastProvider for application-wide toast notifications
import { ToastProvider } from '../context/toastContext'

// MyApp component receives the active page Component and its props
function MyApp({ Component, pageProps }) {
  return(
    // Wrap the app with ToastProvider to enable toast notifications everywhere
    <ToastProvider>
      {/* Render the active page Component with its props */}
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
