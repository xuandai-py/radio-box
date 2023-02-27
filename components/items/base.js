import { Box, Flex } from '@chakra-ui/react'


const Base = ({ children, type }) => {
    switch (type) {
        case 'pomodoro':
            return (
                <>
                    <Flex align='center' height={5} bgColor={'hsla(0,0%,7%,.75)'} gap={1} px={1}  color={'#fff'} borderRadius={'md'}>
                        {children}
                    </Flex>
                </>
            )
        default:
            return (
                <>
                    <Box bgColor={'hsla(0,0%,7%,.75)'} px={1} mx={4} color={'#fff'} borderRadius={'md'}>
                        {children}
                    </Box>
                </>
            )
    }
}

export default Base

