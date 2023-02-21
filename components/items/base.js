import { Box, } from '@chakra-ui/react'


const Base = ({ children }) => {

    return (
        <>
            <Box bgColor={'hsla(0,0%,7%,.75)'} p={3} mx={4} color={'#fff'} borderRadius={'20%'}>
                {children}
            </Box>
        </>
    )
}

export default Base

