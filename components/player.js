import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useThumbContext } from './hooks/thumb';
import { DragHandleIcon } from '@chakra-ui/icons'
import { IconButton, HStack, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { ModalInit } from '../components/modal'

export const Player = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const playlist = props.data?.length;
    const { index, setIndex, trackUri } = useThumbContext()

    const handleClickPrevious = () => {
        setIndex(() => index === 0 ? playlist - 1 : index - 1)
    }

    const handleClickNext = () => {
        setIndex(() => index < playlist - 1 ? index + 1 : 0)
    }

    console.log('uri at player: ', trackUri);
    return (
        <HStack spacing={5}>
            <AudioPlayer
                // autoPlay
                loop
                showFilledProgress={false}
                showSkipControls={true}
                showJumpControls={false}
                customAdditionalControls={[]}
                customProgressBarSection={['RHAP_UI.CURRENT_TIME', 'RHAP_UI.DURATION']}
                src={trackUri}
                onPlay={e => console.log("onPlay")}
                onError={e => console.log(e)}
                onLoadedData={e => console.log(trackUri)}
                style={{
                    background: 'none'
                }}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
            <IconButton onClick={onOpen} aria-label='View more tracks' icon={<DragHandleIcon />} />
            <ModalInit items={props.data} isOpen={isOpen} onClose={onClose} />

        </HStack>

    )
}