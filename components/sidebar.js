
import { Box, VStack, Icon } from '@chakra-ui/react'
import { CiWavePulse1, CiWheat, CiKeyboard, CiCloudDrizzle, CiTwitter } from 'react-icons/ci'



const Sidebar = ({ children }) => {

    return (
        <>
            <VStack>
                <Icon as={CiWavePulse1} boxSize={6} />
                <Icon as={CiWavePulse1} boxSize={6} />
                <Icon as={CiWavePulse1} boxSize={6} />
                <Icon as={CiWavePulse1} boxSize={6} />
                <Icon as={CiWavePulse1} boxSize={6} />

            </VStack>
        </>
    )
}

export default Sidebar

