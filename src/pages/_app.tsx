import type { AppProps } from 'next/app'
import { ThemeProvider } from '../hooks/useTheme'

import GlobalStyle from '../styles/GlobalStyle'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
