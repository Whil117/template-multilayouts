import Layout from '@Components/layout'
import { AppPropsWithLayout } from '@ixulabs/ui'
import { persistor, store } from '@Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log(Component)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout typeLayout={Component.typeLayout}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
