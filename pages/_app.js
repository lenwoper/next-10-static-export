import '../styles/globals.css'
import Layout from './components/Layout'
import Head from 'next/head'

import reducer ,{initialState} from './components/reducer'
import {StateProvider} from './components/DataLayer'



function MyApp({ Component, pageProps }) {




  return (
    <StateProvider reducer={reducer } initialState={ initialState}>
      <Layout>
        <Head>
          <title>spysr pvt ltd</title>

        </Head>

        <Component {...pageProps} />

      </Layout>

    </StateProvider>



  )



}

export default MyApp
