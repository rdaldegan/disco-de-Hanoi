import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
}

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <Head>
      <title>Quiz React/Next</title>
      <meta name="title" content="Sol Importal" />
      <meta name="description" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://disco-de-hanoi.vercel.app/index" />
      <meta property="og:title" content="Sol Importal" />
      <meta property="og:description" content="Desative o Sol Imortal para tentar salvar Ravnica" />
      <meta property="og:image" content='/capa.jpeg' />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://disco-de-hanoi.vercel.app/index" />
      <meta property="twitter:title" content="Sol Importal" />
      <meta property="twitter:description" content="Desative o Sol Imortal para tentar salvar Ravnica" />
      <meta property="twitter:image" content='/disco4.png' />

    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
