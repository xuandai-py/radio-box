
import { Container, Box, SimpleGrid, ModalOverlay, useDisclosure, Modal, ModalContent, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { CardItem } from '../components/cardItem'
import { Player } from '../components/player'



const YTB_API = 'https://www.googleapis.com/youtube/v3/search'
const YTB_W = 'https://www.youtube.com/watch?v='
const dlVideo = 'http://localhost:3001/api/stream?url='

export async function getServerSideProps() {
  const listItems = await fetch(`${YTB_API}?part=snippet,id&q=lofi&type=video&eventType=completed&maxResults=25&key=${process.env.GG_API}`)
  const data = await listItems.json()
  return {
    props: {
      data
    }
  }
}

const ModalItems = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px)'
  />
)


export default function Home({ data }) {

  const { items } = data
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<ModalItems />)
  const [trackUri, setTrackUri] = useState()

  const handleChangePlayer = (item) => {
    if (item && item.id.videoId != null) {
      fetch(`${dlVideo}${YTB_W}${item.id.videoId}`)
        .then((response) => response.json())
        .then((playUrl) => {
          setTrackUri(playUrl.info.url)
        })
        .catch((err) => console.error(err))
    }
    onClose()
    // handle 404
  }

  return (
    <Container maxW='container.xl' position='relative' h='90vh' p={2}>
      <Button
        onClick={() => {
          setOverlay(<ModalItems />)
          onOpen()
        }}
      >
        Use Overlay one
      </Button>

      <Box position='absolute' bottom={0} left={0} w='100%'>
        <Player trackUri={trackUri} />
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent maxW='90%' h='70%' bg='none' alignItems='center' >
          <SimpleGrid columns={[1, 2, 3, 5]} spacing='30px'>
            {items.map((item) => (
              <Box key={item.id.videoId} onClick={() => { handleChangePlayer(item) }} cursor='pointer'>
                <CardItem
                  title={item.snippet.title}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  link={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                />
              </Box>
            )
            )}

          </SimpleGrid>
        </ModalContent>
      </Modal>
      <Box>

      </Box>
    </Container>
  )
}
