import { Modal, ModalBody, Box, SimpleGrid, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { CardItem } from './cardItem'
import { handleChangePlayer, useFetchTrack } from './fn'
import { useState, useEffect } from 'react'

export const ModalInit = ({ items, overlay, setTrackUri, isOpen, onOpen, onClose }) => {
    const [track, setTrack] = useState('')
    const [err, setErr] = useState('')
    const { status, data, error } = useFetchTrack(track)
    console.log('data: ', data)
    setTrackUri(data.format?.url)


    const handleChangePlayer = (item, index) => {
        if (item && item.id.videoId) {
            const id = item.id.videoId
            setTrack(id)
        } else {
            setErr('Something Wrong happened - Let try another one')
            console.error(err);
        }
        // setId
        onClose()
        // need to handle getFailedTrack()
        // handle 404
    }

  

    return (
        <Modal scrollBehavior={'outside'} isOpen={isOpen} size={'6xl'} onClose={onClose}>
            {/* {overlay} */}
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalContent bg='none' py={4} mx={{ base: 4, md: 5, xl: 0 }}>
                <ModalBody>
                    <SimpleGrid columns={[1, 2, 3, 4]} spacing='30px'>
                        {items.map((item, index) => (
                            <Box key={item.id.videoId} onClick={() => handleChangePlayer(item, index)} cursor='pointer'>
                                <CardItem
                                    title={item.snippet.title}
                                    thumbnail={item.snippet.thumbnails.medium.url}
                                    link={`${process.env.NEXT_PUBLIC_YTB_W}${item.id.videoId}`}
                                />
                            </Box>
                        )
                        )}

                    </SimpleGrid>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

