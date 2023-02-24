
import { Container, Box, Flex, ModalOverlay, useDisclosure, Modal, ModalContent, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { CardItem } from '../components/cardItem'
import { Player } from '../components/player'
import { ModalInit, ModalItems } from '../components/modal'
import Timer, { Clock } from '../components/items/timer'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'

export async function getStaticProps() {
  const listItems = await fetch(`${process.env.YTB_API}?part=snippet,id&q=lofi&type=video&eventType=completed&maxResults=25&key=${process.env.GG_API}`)
  return {
    props: {
      data: await listItems.json()
    }
  }
}


export default function Home({ data }) {

  console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [trackUri, setTrackUri] = useState()



  return (
    <Container maxW='container.xl' position='relative' h='100vh' p={2}>
      <Topbar />
      <Sidebar />
      <Button
        onClick={() => {
          // setOverlay(<ModalItems />)
          onOpen()
        }}
      >
        Pick play track
      </Button>
      <ModalInit setTrackUri={setTrackUri} items={data.items} isOpen={isOpen} onClose={onClose} />

      <Box position='absolute' bottom={5} left={0} w='100%'>
        <Player trackUri={trackUri} />
      </Box>
      {/* item[index].src */}

    </Container>
  )
}
