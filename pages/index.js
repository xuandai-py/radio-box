
import { Container, Box, Flex, Text, useColorModeValue, useDisclosure, Modal, ModalContent, Button } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { CardItem } from '../components/cardItem'
import { Player } from '../components/player'
import { ModalInit, ModalItems } from '../components/modal'
import Timer, { Clock } from '../components/items/timer'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'
import { useFetchTrack } from '../components/fn'
import { useThumbContext } from '../components/context/thumb'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

const ScrollContainer = styled.div`
  overflow: hidden;
`
const my_animation = keyframes`
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  
  }
`

const ScrollText = styled.p`
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my_animation 45s linear infinite;
  -webkit-animation: my_animation 45s linear infinite;
  animation: my_animation 45s linear infinite;

  @keyframes my_animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  
  }
}
`


export async function getStaticProps() {
  const listItems = await fetch(`${process.env.YTB_API}?part=snippet,id&q=lofi&type=video&eventType=completed&maxResults=${process.env.NEXT_PUBLIC_SONGS_NUMBER}&key=${process.env.GG_API}`)
  return {
    props: {
      data: await listItems.json()
    }
  }
}


export default function Home({ data }) {

  console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [trackId, setTrackId] = useState('')
  const { index, setIndex, trackUri, setTrackUri, allTrack, setAllTrack } = useThumbContext()
  const [trackTitle, setTrackTitle] = useState('')
  const { status, dataTrack, error } = useFetchTrack(trackId)
  useEffect(() => {
    setTrackId(data.items[index].id.videoId)
    setTrackUri(dataTrack.format?.url)
    setTrackTitle(data.items[index].snippet.title)
    console.log('log: ', trackUri);
  }, [index])

  console.log(trackId, ' :', trackUri)
  return (
    <Container maxW='container.xl' position='relative' h='100vh' p={2}>
      <Topbar />

      <ModalInit items={data.items} isOpen={isOpen} onClose={onClose} />
      <Flex align={'center'} justify={'center'} h={'80%'}>
        COMINGSOON!
      </Flex>
      <Flex align={'center'} gap={4} m="0 auto"
        direction={{ base: 'column', md: 'row' }}
        bgColor="white"
        bg={useColorModeValue('#ffffff2b', '#8c98d247')}
        css={{ backdropFilter: 'blur(5px)' }}
        borderRadius={'xl'}
      >
        <Player />
        <Button onClick={() => { onOpen() }} _hover={{ bg: '#1DB954' }} textTransform={'uppercase'} borderRadius={0} bg={'#1DB954'}>
          watch more
        </Button>
        <ScrollContainer>
          <Box onClick={() => { onOpen() }} fontSize={{ base: 'md', xl: 'lg' }} cursor='pointer'>
            <ScrollText css={{
              animation: my_animation
            }}>
              <ArrowForwardIcon mx={2} />
              {trackTitle}
              <ArrowBackIcon mx={2} />
            </ScrollText>
          </Box>
        </ScrollContainer>

      </Flex>
    </Container>
  )
}
