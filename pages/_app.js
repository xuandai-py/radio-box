import Layout from '../components/_layout'
import {ChakraProvider} from '@chakra-ui/react'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
	  <ChakraProvider>
		  <Layout>
        <Component {...pageProps} />
      </Layout>
  	</ChakraProvider>
  )
}

export default MyApp
