import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>M30 Arquitetura</title>
        <link rel="canonical" href="https://www.m30.arq.br" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="pt-br" />
        <meta name="author" content="M30 Arquitetura" />
        <meta name="keywords" content="m30, m30 arquitetura" />
        <meta name="title" content="M30 Arquitetura" />
        <meta
          name="description"
          content="A M30 é um escritório de arquitetura, que busca alinhar tecnologia e 
          design, com uma entrega autêntica e atemporal para seus clientes. Baseando-se na arquitetura moderna brasileira, mas com o uso de novas
          tecnologias e materiais."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
