import Layout from '../components/_layout'
import { ChakraProvider } from '@chakra-ui/react'
import { ThumbProvider } from '../components/context/thumb'
import '../styles/styles.css'
import theme from '../components/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ThumbProvider>
          <Component {...pageProps} />
        </ThumbProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
