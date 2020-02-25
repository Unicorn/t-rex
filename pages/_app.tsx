import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'

import Main from '@/containers/Main'
import Meta from '@/containers/Meta'
import { nextStore } from '@/controllers/reduxController'

import '@/assets/stylesheets/app.scss'

interface Props {
  store: any
}

class RootApp extends App<Props> {

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Meta>
          <title>Unicorn.TV</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Meta>

        <Main>
          <Component {...pageProps} />
        </Main>
      </Provider>
    )
  }

}

export default withRedux(nextStore)(RootApp)