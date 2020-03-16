import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'

import Meta from '@/containers/Meta'
import { nextStore } from '@/controllers/reduxController'
import { RootState } from '@/models/app'
import Main from '@/views/custom/Main'

import '@/assets/stylesheets/app.scss'

interface Props {
  store: any
}

class RootApp extends App<Props> {

  render() {
    const { Component, pageProps, store } = this.props
    const { auth } = store.getState() as RootState

    return (
      <Provider store={store}>
        <Meta>
          <title>Neue UI</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Meta>

        {auth.isLoggedIn ? <Main><Component {...pageProps} /></Main> : <Main><Component {...pageProps} /></Main>}
      </Provider>
    )
  }

}

export default withRedux(nextStore)(RootApp)