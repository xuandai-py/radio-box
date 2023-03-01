
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
        safasffsa
      </Flex>
      <Flex align={'center'} gap={4} m="0 auto"
            // bgColor="white"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(5px)' }}
            borderRadius={'lg'}>
        <Player />
        <Text onClick={() => { onOpen() }} cursor='pointer'>
          <ArrowForwardIcon mx={2} />
          {trackTitle}
          <ArrowBackIcon mx={2} />
        </Text>
      </Flex>
    </Container>
  )
}
