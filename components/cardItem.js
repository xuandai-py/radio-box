import { Box, Image, Heading, Link, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const CardItem = ({ link, title, thumbnail }) => (
    <Box w="100%" textAlign="center" justify='center' maxW='320px' position='relative' >
        <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            objectFit='contain'
        />
        <Link href={link} isExternal>
            <Tag size='md' borderRadius='20px' top={0} right={0}
                variant='solid'
                colorScheme='green'
                pos='absolute'>
                <TagLabel pt='2px'>GÉTGÔ</TagLabel>
                <TagRightIcon as={ExternalLinkIcon} />
            </Tag>
        </Link>
        <Heading size='sm' color='white'>{title}</Heading>
    </Box >
)