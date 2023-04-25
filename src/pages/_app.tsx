import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
