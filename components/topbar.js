import NextLink from 'next/link'
import ThemeToggleButton from './toggle-button'
import Clock from './items/timer'
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
    Button
} from '@chakra-ui/react'
import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialGoogle, SlFire } from 'react-icons/sl'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target='blank'
            {...props}
        >
            <Icon as={children} boxSize={6} />
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))


const Topbar = props => {
    const { path } = props

    return (
        <Box
            as="nav"
            w="80%"
            m="0 auto"
            // bgColor="white"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderRadius={35}
            //   zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                px={6}
                maxW="container.xl"
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Flex align="center" mx={5}>
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
                    justify="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    spacing={4}
                >
                    <Flex pt={2}>
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

                    <Clock color='#fff' />
                    <Button leftIcon={<Icon as={SlFire} boxSize={6} />} bg='none' >
                        pomorodo
                    </Button>
                </Stack>
                <Flex align="center" mx={5}>
                    <ThemeToggleButton />
                </Flex>
            </Container>
        </Box>
    )
}

export default Topbar