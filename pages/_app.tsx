import { FC } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

import Meta from '@/containers/Meta'
import { wrapper } from '@/controllers/reduxController'
import Main from '@/views/custom/Main'

import '@/assets/styles/app.scss'

const RootApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Meta>
        <title>Neue UI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Meta>

      <CSSReset />

      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(RootApp)