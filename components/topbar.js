import NextLink from 'next/link'
import ThemeToggleButton from './toggle-button'
import Clock from './items/timer'
import { useState } from 'react'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    forwardRef,
    Icon,
    Tooltip,
    Button
} from '@chakra-ui/react'
import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialGoogle, SlFire } from 'react-icons/sl'
import Pomodoro from './items/pomodoro'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            px={2}
            py={1}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target='blank'
            {...props}
        >
            <Icon as={children} boxSize={6} />
        </Link>
    )
}

const PlayStaticTrackItem = ({ href, children, ...props }) => {

    // const active = path === href
    // const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    const setStaticTrack = () => {

    }
    return (
        <Button onClick={setStaticTrack} _hover={{ bg: 'none' }} border='1px solid '>
            <Icon as={children} boxSize={6} />
        </Button>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))


const Topbar = props => {
    const { path } = props
    const [visible, setVisible] = useState(false)

    const onClick = () => setVisible(!visible)
    return (
        <Box
            as="nav"
            w="100%"
            m="0 auto"
            // bgColor="white"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderRadius={'lg'}
            //   zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                px={2}
                maxW="container.xl"
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Flex align="center" >
                    {/* <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading> */}
                    logo
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    // width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    // justify="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    spacing={4}

                >
                    <Flex flex={1} align='center' justify='right' gap={4}>
                        {visible && (
                            <Pomodoro />
                        )}
                        <Tooltip hasArrow label='Pomodoro' bg='red.600'>
                            <Button onClick={onClick} _hover={{ bg: 'none' }} border='1px solid '>
                                <Icon as={SlFire} boxSize={6} />
                            </Button>
                        </Tooltip>
                    </Flex>
                    <Flex flex={1} pt={2} justify='center' gap={4}>
                        <LinkItem
                            href="https://github.com/xuandai-py"
                            path={path}
                        >
                            {SlSocialGithub}
                        </LinkItem>
                        <LinkItem
                            href="https://www.facebook.com/profile.php?id=100006465675143"
                            path={path}
                        >
                            {SlSocialFacebook}
                        </LinkItem>
                        <LinkItem
                            href="https://www.instagram.com/hermit_crab_1606"
                            path={path}
                        >
                            {SlSocialInstagram}
                        </LinkItem>
                        <LinkItem
                            href="mailto:buinguyenxuandai@gmail.com"
                            path={path}
                        >
                            {SlSocialGoogle}
                        </LinkItem>
                    </Flex>
                    <Clock color='#fff' align='center' />

                    <Flex flex={2} pt={2} justify='center' gap={4}>
                        <PlayStaticTrackItem
                            href="https://cdn.pixabay.com/download/audio/2021/08/09/audio_6b294070f5.mp3?filename=forest-with-small-river-birds-and-nature-field-recording-6735.mp3"
                            path={path}
                        >
                            {SlSocialGithub}
                        </PlayStaticTrackItem>
                       
                    </Flex>
                </Stack>
                <Flex align="center" >
                    <ThemeToggleButton />
                </Flex>
            </Container>
        </Box>
    )
}

export default Topbar