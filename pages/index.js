
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, SimpleGrid, Container, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useThumbContext } from '../components/hooks/thumb'
import { useFetchTrack } from '../components/hooks/fn'
import { ModalInit } from '../components/modal'
import { Player } from '../components/player'
import Topbar from '../components/topbar'
import Column from '../components/todo/column'
import { ColumnType } from '../components/todo/utils/enums'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ScrollContainer = styled.div`
  overflow: hidden;
  @media screen and (max-width: 300px) {
    display: none;
  }
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
  white-space: nowrap;
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
      <Box p={4}>
        <DndProvider backend={HTML5Backend}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 0, md: 5, lg: 10 }}>
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.ON_GOING} />
            <Column column={ColumnType.PENDING} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </DndProvider>
      </Box>
      <Flex align={'center'} gap={4} m="0 auto"
        direction={'row'}
        justify={'left'}
        minW={'10em'}
        bgColor="white"
        bg={useColorModeValue('#ffffff2b', '#8c98d247')}
        css={{ backdropFilter: 'blur(5px)' }}
        borderRadius={'xl'}
      >
        <Player handleClick={onOpen} />
        {/* <Button onClick={() => { onOpen() }} _hover={{ bg: '#1DB954' }} textTransform={'uppercase'} borderRadius={0} bg={'#1DB954'}>
          watch more
        </Button> */}
        <ScrollContainer>
          <Box fontSize={{ base: 'md', xl: 'lg' }} cursor='pointer'>
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
    </Container >
  )
}
