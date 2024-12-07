// This is a custom Document component for Next.js that handles the initial HTML structure
// It adds custom fonts, favicon, and enables server-side rendering of styled-components
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // Render method defines the base HTML structure of every page
  render(){
    return(
      <Html>
         <Head>
          {/* Preconnect to Google Fonts for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          
          {/* Load Roboto font family */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
          {/* Add favicon */}
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          {/* Main component contains the page content */}
          <Main />
          {/* NextScript component contains Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    )
  }

  // getInitialProps enables server-side rendering of styled-components
  static async getInitialProps(ctx) {
    // Initialize styled-components sheet
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // Wrap the app with styled-components collector
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      // Get the initial props from parent Document class
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        // Combine regular styles with styled-components styles
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      // Clean up styled-components sheet
      sheet.seal()
    }
  }
}