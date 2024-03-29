import {
    Box, Button, IconButton, Container, Flex, forwardRef,
    Icon, Image, Link, Avatar,
    Stack, Tooltip, useColorModeValue, useBreakpointValue, useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, FormControl, FormLabel, Switch
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { DragHandleIcon } from '@chakra-ui/icons'
import { useState, useRef } from 'react'
import { CiSun, CiCloudDrizzle, CiShare2, CiBaseball, CiDeliveryTruck, CiKeyboard, CiTimer, CiTwitter, CiWavePulse1 } from 'react-icons/ci'
import { SlFire, SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram } from 'react-icons/sl'
import { useThumbContext } from './hooks/thumb'
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
            display='flex'
            px={2}
            py={1}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target='blank'
            {...props}
        >
            <Icon as={children} boxSize={7} />
        </Link>
    )
}

const PlayStaticTrackItem = ({ href, children, style }) => {

    // const active = path === href
    const inactiveColor = useColorModeValue('whiteAlpha.900', '')
    const { setTrackUri } = useThumbContext()
    const setStaticTrack = () => setTrackUri(href)
    return (
        <Button onClick={setStaticTrack}
            _focus={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            _active={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            _hover={{ bg: useColorModeValue('#1DB954', '#1DB954') }}
            bg='none'
            border={{ base: '1px solid', md: 'none' }}
            m={{ base: 1, md: 0 }}
            px={{ base: 2, md: 1, xl: 2 }}
        >
            <Icon as={children} boxSize={{ base: 8, md: 7, lg: 8 }} />
        </Button>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const IconWrapper = ({ style, children, icon, title }) => (
    <>
        <Flex display={{ base: 'none', md: 'flex' }} px={1} align={'center'} gap={{ base: 4, md: 2, lg: 4 }} style={style}>
            {children}
        </Flex>

        <Flex display={{ base: 'flex', md: 'none' }} align={'center'} gap={{ base: 4, md: 2, lg: 4 }} style={style}>
            <Popover isLazy>
                <PopoverTrigger>
                    <IconButton aria-label='Contact' icon={{ ...icon }} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>{title}</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody display={'flex'}>
                        {children}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    </>
)


const Topbar = props => {
    const { path } = props
    const [visible, setVisible] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Flex
            as="nav"
            w="100%"
            p={{ base: 1, xl: 0 }}
            // m="0 auto"
            // bgColor="white"

            zIndex={101}
            {...props}
        >
            {/* <Container
                display="flex"
                px="2"
                maxW="container.lg"
                wrap="wrap"
                align="center"
                justifyContent="space-between"
                bg={useColorModeValue('#cfd3b280', '#20202380')}
                css={{ backdropFilter: 'blur(5px)' }}
                borderRadius={'lg'}
            >
                <Flex align="center" >
                    <Image src='https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg' boxSize={'40px'} objectFit='cover' />
                </Flex>
                <Clock color='#fff' align='center' style={{ display: useBreakpointValue({ base: 'none', sm: 'block' }, { fallback: 'sm' }) }} />
                <Stack
                    direction={{ base: 'row', md: 'row' }}
                    // display={{ base: 'none', sm: 'flex' }}
                    alignItems="center"
                    // flexGrow={1}
                justifyContent="space-around"

                    spacing={4}
                >
                    {visible && (
                        <Pomodoro />
                    )}
                    <IconButton ref={btnRef} onClick={onOpen} icon={<DragHandleIcon />} mr={2} />
                    <ThemeToggleButton />
                </Stack>
            </Container> */}

            <Container
                display="flex"
                px={2}
                py={1}
                maxW="container.lg"
                wrap="wrap"
                align="center"
                justifyContent="space-between"
                bg={useColorModeValue('#cfd3b280', '#20202380')}
                css={{ backdropFilter: 'blur(5px)' }}
                borderRadius="lg"
            >
                <Flex align="center" flex="1">
                    <Image
                        src="https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg"
                        boxSize="40px"
                        objectFit="cover"
                    />
                </Flex>
                <Box  >
                    <Clock
                        color="#fff"
                        align="center"
                        style={{
                            display: useBreakpointValue({ base: 'none', sm: 'block' }, { fallback: 'sm' }),
                        }}
                    />
                </Box>
                <Stack
                    direction={{ base: 'row', md: 'row' }}
                    alignItems="center"
                    justifyContent="right"
                    spacing={2}
                    flex="1"
                >
                    {visible && <Pomodoro />}
                    <IconButton ref={btnRef} onClick={onOpen} icon={<DragHandleIcon />} mr={2} />
                    <ThemeToggleButton />
                </Stack>
            </Container>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Options</DrawerHeader>
                    <DrawerBody>
                        <Flex align='center' gap={{ base: 6, md: 4 }} justifyContent={{ base: 'left', md: 'space-around' }}>

                            <FormControl display='flex' w={'auto'} alignItems='center'>
                                <FormLabel htmlFor='Pomodoro' mb='0'>
                                    Pomodoro timer
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='whatsapp' onChange={() => setVisible(!visible)} />
                            </FormControl>



                            <IconWrapper
                                icon={<DragHandleIcon />}
                                title='Static tracks: '
                                style={{
                                    border: '1px solid ',
                                    borderRadius: 8
                                }}
                            >
                                <Box>

                                    {data.map((item, index) => (
                                        <PlayStaticTrackItem key={index}
                                            href={item.href}
                                        >
                                            {item.icon}
                                        </PlayStaticTrackItem>

                                    ))}
                                </Box>
                            </IconWrapper>

                            <IconWrapper
                                style={{
                                    // paddingTop: useBreakpointValue({ base: 0, xl: '6px' }),
                                    // justifyContent: 'right',
                                    border: '1px solid ',
                                    padding: 3,
                                    borderRadius: '10px'
                                }}
                                icon={<CiShare2 />}
                                title='Reach me via: '
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

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
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
        icon: CiSun
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
    },
    {
        href: 'https://res.cloudinary.com/dxhl09emw/video/upload/v1677927976/radio/y2mate.com_-_Need_To_Sleep_Try_This_Angelo_Shoe_Shine_ASMR_ribng3.mp3',
        icon: CiBaseball
    }
]

export default Topbar


{/* <Flex align="center" >
                        <IconButton display={{ sm: 'none' }} ref={btnRef} onClick={onOpen} icon={<DragHandleIcon />} mr={2} />

                    </Flex> */}

{/* <Flex flex={2} align='center' justify='right' gap={4}> */ }

{/* <Tooltip hasArrow label='Pomodoro' bg='#1DB954' display={{ base: 'none', md: 'inline-block' }}>
                            <IconButton display={{ base: 'none', md: 'inline-flex' }} border={'1px solid #1DB954'} bg={'none'} fontSize={20} color={'#1DB954'} onClick={onClick} aria-label='Pomodoro' size='md' icon={<CiTimer />} />
                        </Tooltip> */}

{/* <IconWrapper
                            style={{
                                paddingTop: useBreakpointValue({ base: 0, xl: '6px' }),
                                justifyContent: 'right',

                            }}
                            icon={<CiShare2 />}
                            title='Reach me via: '
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
                        </IconWrapper> */}
{/* </Flex> */ }
{/* <IconWrapper style={{ flex: 2, justifyContent: 'left' }} icon={<DragHandleIcon />} title='Static tracks: ' >
                        {data.map((item, index) => (
                            <PlayStaticTrackItem key={index}
                                href={item.href}
                            >
                                {item.icon}
                            </PlayStaticTrackItem>

                        ))}
                        
                    </IconWrapper> */}
