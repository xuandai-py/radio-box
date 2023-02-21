import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
// import Header from '../Header'
// import Footer from '../Footer'

const video = 'https://lofi-new.s3.us-east-2.amazonaws.com/seoul/inside+-+night.mp4'

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
      <Container maxW='container.2xl' p='0'>
        <Flex
          w={'100%'}
          // minH={{base: '85vh', md: '60vh'}}
          h={'100vh'}
          position={'relative'}
          align={'center'}
        >
          <video className='videoTag' style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <Flex
            w={'100%'}
            position={'absolute'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
          // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          >
            {children}
          </Flex>
        </Flex>
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