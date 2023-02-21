import { Modal, Box, SimpleGrid, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { CardItem } from './cardItem'

const YTB_W = 'https://www.youtube.com/watch?v='
const dlVideo = 'http://localhost:3000/api/stream?url='

export const ModalInit = ({ items, overlay, setTrackUri, isOpen, onOpen, onClose }) => {

    const handleChangePlayer = (item) => {
        if (item && item.id.videoId != null) {
            fetch(`${dlVideo}${YTB_W}${item.id.videoId}`, {headers: {Range: 'bytes=0-10380331'}})
                .then((response) => response.json())
                .then((playUrl) => {
                    console.log('playurl: ', playUrl)
                    setTrackUri(playUrl.format.url)
                })
                .catch((err) => console.error(err))
        }
        onClose()
        // handle 404
    }
    return (
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
    )
}
export const ModalItems = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
    />
)
