import { FC } from 'react'
import { AppProps } from 'next/app'

import Meta from '@/containers/Meta'
import { wrapper } from '@/controllers/reduxController'
import Main from '@/views/custom/Main'

import '@/assets/stylesheets/app.scss'

const RootApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Meta>
        <title>Neue UI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Meta>

      <Main><Component {...pageProps} /></Main>
    </>
  )
}

export default wrapper.withRedux(RootApp)