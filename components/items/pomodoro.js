/**
 * b1: nhan vao button: popup hien thi o ben trai bao gom : [30:00] - {reset icon} - {play/stop}
 * nhan play > countdown tu 30 . nhan stop: dung dong ho
 * nhan reset > set timer tro lai 30
 */

import { useState, useEffect } from 'react'
import { SlControlPlay, SlControlPause, SlRefresh } from 'react-icons/sl'
import { Box, Button, HStack, Heading, Icon, Divider } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Base from './base'
import { useCountdown } from '../hooks/fn'
import { useRef } from 'react'

const Pomodoro = () => {

    const [time, setTime] = useState(1800)
    const [displayCount, setDisplayCount] = useState('')
    const [timerState, setTimerState] = useState(false)
    const [resetTimer, setResetTimer] = useState(false)
    const count = useCountdown(time, timerState, resetTimer)

    useEffect(() => {
        setDisplayCount(count)
        console.log(`count: ${count} - display count: ${displayCount} - time: ${time}`)
    }, [count, time])

    const handleResetTimer = () => {
        setTime(1800)
        // setTimerState(false)
        setResetTimer(true)
    }

    const controlTimer = () => {
        setTimerState(!timerState)
        setResetTimer(false)
    }

    const increaseTimeSet = () => {
        setTime(time + 60)
        console.log(time)
    }

    const decreaseTimeSet = () => {
        if (time > 120) setTime(time - 60)
    }
    return (
        <Box display={{base: 'none', md: 'unset'}}>
            <HStack>
                <Base type='pomodoro'>
                    <Icon boxSize={3} as={AddIcon} onClick={increaseTimeSet} />
                    <Divider orientation='vertical' />
                    <Heading size={'sm'}>
                        {displayCount}
                    </Heading>
                    <Divider orientation='vertical' />
                    <Icon boxSize={3} as={MinusIcon} onClick={decreaseTimeSet} />
                </Base>
                <HStack>
                    <Button onClick={handleResetTimer} size='xs' bg='none' m={0} p={0} _hover={{ bg: 'none' }} >
                        <Icon boxSize={4} as={SlRefresh} />
                    </Button>
                    <Button onClick={controlTimer} size='xs' bg='none' m={0} p={0} _hover={{ bg: 'none' }} >
                        <Icon boxSize={4} as={SlControlPause} />
                    </Button>
                </HStack>
            </HStack>

        </Box>
    )
}
export default Pomodoro