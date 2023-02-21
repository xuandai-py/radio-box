import { useState, useEffect } from 'react'
import { TimeIcon } from "@chakra-ui/icons"
import { Box, } from '@chakra-ui/react'
import Base from './base'

const Clock = () => {

  const [time, setTime] = useState()

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer)
    }
  }, []);


  const tick = () => {
    setTime(() => {
      const hour = (new Date().getHours());
      const minutes = (new Date().getMinutes());
      return `${hour}:${minutes}`;
    })
  }

  return (
    <>
      <Base>
        {time}
      </Base>
    </>
  )
}
export default Clock