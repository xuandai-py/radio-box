/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   modularizeImports: {
  //     '@chakra-ui/react/?(((\\w*)?/?)*)': {
  //       transform: '@chakra-ui/react/{{ matches.[1] }}/{{member}}'
  //     },
  //     '@chakra-ui/icons/?(((\\w*)?/?)*)': {
  //       transform: '@chakra-ui/icons/{{ matches.[1] }}/{{member}}'
  //     },
  //     '@emotion/react/?(((\\w*)?/?)*)': {
  //       transform: '@emotion/react/{{ matches.[1] }}/{{member}}'
  //     },
  //     '@emotion/styled/?(((\\w*)?/?)*)': {
  //       transform: '@emotion/styled/{{ matches.[1] }}/{{member}}'
  //     },
  //     'react-icons/?(((\\w*)?/?)*)': {
  //       transform: '@react-icons/{{ matches.[1] }}/{{member}}'
  //     }
  //   }
  // }
}



module.exports = nextConfig
