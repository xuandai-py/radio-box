import {
    Box, Button, IconButton, Container, Flex, forwardRef,
    Icon, Image, Link, Avatar,
    Stack, Tooltip, useColorModeValue, useBreakpointValue,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { DragHandleIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { CiCloudDrizzle, CiShare2, CiDeliveryTruck, CiKeyboard, CiTimer, CiTwitter, CiWavePulse1 } from 'react-icons/ci'
import { SlFire, SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram } from 'react-icons/sl'
import { useThumbContext } from './context/thumb'
import Pomodoro from './items/pomodoro'
import Clock from './items/timer'
import ThemeToggleButton from './toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href

    const inactiveColor = useColorModeValue('teal.800', 'whiteAlpha.900')
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
    const inactiveColor = useColorModeValue('whiteAlpha.900', '')
    const { setTrackUri } = useThumbContext()
    const setStaticTrack = () => setTrackUri(href)
    return (
        <Button onClick={setStaticTrack}
            _focus={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            _active={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            _hover={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            bg='none' >
            <Icon as={children} boxSize={6} />
        </Button>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const IconWrapper = ({ style, children }) => (
    <>
        <Flex display={{ base: 'none', xl: 'flex' }} align={'center'} gap={4} style={style}>
            {children}
        </Flex>

        <Flex display={{ base: 'flex', xl: 'none' }} align={'center'} gap={4} style={style}>


            <Popover isLazy>
                <PopoverTrigger>
                    <IconButton aria-label='Contact' icon={<DragHandleIcon />} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Reach me via: </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        {children}
                    </PopoverBody>
                </PopoverContent>
            </Popover> </Flex>
    </>
)


const Topbar = props => {
    const { path } = props
    const [visible, setVisible] = useState(false)

    const onClick = () => setVisible(!visible)
    return (
        <Box
            as="nav"
            w="100%"
            py={{ base: 1, xl: 0 }}
            // m="0 auto"
            // bgColor="white"
            bg={useColorModeValue('#cfd3b280', '#20202380')}
            css={{ backdropFilter: 'blur(5px)' }}
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

                    <Image src='https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg' boxSize={'40px'} objectFit='cover' />
                </Flex>
                <Stack
                    direction={{ base: 'row', md: 'row' }}
                    // display={{ base: 'none', md: 'flex' }}
                    // width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    // justify="center"
                    flexGrow={1}
                    // mt={{ base: 4, md: 0 }}
                    spacing={4}

                >
                    <Flex flex={2} align='center' justify='right' gap={4}>
                        {visible && (
                            
                            <Pomodoro />
                        )}
                        <Tooltip hasArrow label='Pomodoro' bg='#1DB954' display={{base: 'none', md: 'inline-block'}}>
                    
                            <IconButton border={'1px solid #1DB954'} bg={'none'} fontSize={20} color={'#1DB954'} onClick={onClick} aria-label='Pomodoro' size='md' icon={<CiTimer />} />

                        </Tooltip>

                        <IconWrapper
                            style={{
                                paddingTop: useBreakpointValue({ base: 0, xl: '6px' }),
                                justifyContent: 'right'
                            }}
                        >
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
                        </IconWrapper>
                    </Flex>
                    <Clock color='#fff' align='center' />


                    <IconWrapper style={{ flex: 2, justifyContent: 'left' }} >
                        {data.map((item, index) => (
                            <PlayStaticTrackItem key={index}
                                href={item.href}
                            >
                                {item.icon}
                            </PlayStaticTrackItem>

                        ))}
                    </IconWrapper>
                </Stack>
                <Flex align="center" >
                    <ThemeToggleButton />
                </Flex>
            </Container>
        </Box>
    )
}

const data = [
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677604915/radio/keyboard-clicking-typing-cherry-red-mechanical-57837_ncvyqx.mp3',
        icon: CiKeyboard
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677604918/radio/ocean-waves-112906_z84lse.mp3',
        icon: CiWavePulse1
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677604911/radio/campfire-crackling-fireplace-sound-119594_t0ij1i.mp3',
        icon: SlFire
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677604892/radio/bird-call-in-spring-6865_gq0lqv.mp3',
        icon: CiTwitter
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677605174/radio/1-minute-rain-medium-6767_ogj1ab.mp3',
        icon: CiCloudDrizzle
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677853743/radio/driving-in-a-car-6227_v5eveh.mp3',
        icon: CiDeliveryTruck
    }
]

export default Topbar