import { useState, useEffect } from 'react'
import { TimeIcon } from "@chakra-ui/icons"
import { Box, Heading } from '@chakra-ui/react'
import Base from './base'

const Clock = () => {

  const [time, setTime] = useState()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((new Date()).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, []);


  return (
    <>
      <Base>
        <Heading size='lg'>
          {time}
        </Heading>
      </Base>
    </>
  )
}
export default Clock