import React from 'react'
import { Box, Textarea, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { TaskModel } from './utils/model'
import { AutoResizeTextArea } from './resizeTextArea'

type TaskProps = {
    index: number,
    task: TaskModel,
    onDelete: (id: TaskModel['id']) => void,
    onUpdate: (id: TaskModel['id'], value: TaskModel) => void
}
const Task = ({ index, task, onDelete, onUpdate }: TaskProps) => {
    
    const onChangeHeading = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        onUpdate(task.id, {...task, heading: value})
    }

    const onClickDelete = () => {
        onDelete(task.id)
    }

return (
        <Box
            role='group'
            pos='relative'
            rounded='lg'
            // w={200}
            pl={3}
            pr={7}
            pt={3}
            pb={1}
            boxShadow='xl'
            cursor='grab'
            bgColor={task.color}
        >
            <IconButton
                position='absolute'
                top={0}
                right={0}
                // zIndex=100}
                aria-label='delete this task'
                size='md'
                color='gray.700'
                icon={<DeleteIcon />}
                opacity={0}
                _groupHover={{
                    opacity: 1
                }}
                onClick={onClickDelete}
            />
            <AutoResizeTextArea
                value={task.heading}
                onChange={onChangeHeading}
                color='gray.700'
                cursor='inherit'
                resize='none'
                fontWeight='semibold'
                border='none'
                focusBorderColor='none'
                p={0}
                minH={70}
                maxH={200}
            />


        </Box>
    )
}

export default Task