import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
// import Header from '../Header'
// import Footer from '../Footer'

const Main = ({ children }) => {
    return (
        <Box as='main'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>LofiRadio - Trang chu</title>
                <meta name="description" content="LofiRadio's homepage" />
                <meta name="description" content="Xuandai's homepage" />
                <meta name="author" content="HermitCrab" />
                <meta name="author" content="Xuandai" />
            </Head>
            {/* <Header path={router.asPath}/> */}
            <Container maxW='container.xl' pt={10}  minW='100%' minH='100vh' bg='url(https://www.lofi.cafe/gifs/v2WuhMBzb3h5e.gif) no-repeat fixed' bgAttachment='center' bgPosition='center' bgSize='cover' >
                <Box >
                    {children}
                </Box>
            </Container>
        </Box>

    )
}

{/* <Box>
<InnerBox bg='#344251 url(images/subsub.webp) no-repeat' h='500px' bgPosition='center' bgSize='cover' variant='inner-box'>
  <Box bg='#191e0b47' h='100%' w='100%' borderRadius='10px' p={5} color='whiteAlpha.900'>
    <Heading size='md' textTransform='uppercase'>ưu đãi xe mới giá tốt</Heading>
    <Heading size='lg' textTransform='uppercase'>ưu đãi xe kia - mazda giá tốt nhất</Heading>
    <VStack justify='center' h='85%'>
      <FordwardButton href='/model' >xem nhiều mẫu xe hơn</FordwardButton>
      <Divider orientation='horizontal' />
      <FordwardButton href='/model' >đăng ký để nhận tư vấn ngay</FordwardButton>

    </VStack>
  </Box>
</InnerBox> */}

export default Main