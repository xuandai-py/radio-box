
import { Container, Box, Flex, ModalOverlay, useDisclosure, Modal, ModalContent, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { CardItem } from '../components/cardItem'
import { Player } from '../components/player'
import { ModalInit, ModalItems } from '../components/modal'
import Timer, { Clock } from '../components/items/timer'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'


const YTB_API = 'https://www.googleapis.com/youtube/v3/search'

export async function getStaticProps() {
  const listItems = await fetch(`${YTB_API}?part=snippet,id&q=lofi&type=video&eventType=completed&maxResults=25&key=${process.env.GG_API}`)
  return {
    props: {
      data: await listItems.json()
    }
  }
}


export default function Home({ data }) {

  console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<ModalItems />)
  const [trackUri, setTrackUri] = useState()



  return (
    <Container maxW='container.xl' position='relative' h='100vh' p={2}>
      <Topbar />
      <Sidebar />
      <Button
        onClick={() => {
          setOverlay(<ModalItems />)
          onOpen()
        }}
      >
        Pick play track
      </Button>

      <Box position='absolute' bottom={5} left={0} w='100%'>
        <Player trackUri={trackUri} />
      </Box>

      <ModalInit setTrackUri={setTrackUri} items={data.items} overlay={overlay} isOpen={isOpen} onClose={onClose} />
    
    </Container>
  )
}
