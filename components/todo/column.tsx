import { AddIcon } from "@chakra-ui/icons"
import { Box, Heading, Badge, IconButton, Stack, useColorModeValue } from '@chakra-ui/react'
import Task from "./task"
import { ColumnType } from "./utils/enums"
import { TaskModel } from "./utils/model"
import React, { useEffect, useState } from 'react'
import useTaskEvent from "./hooks/useTaskEvent"

const ColumnColorScheme: Record<ColumnType, string> = {
    Todo: 'gray',
    'On Going': 'blue',
    Pending: 'red',
    Completed: 'green',
}

const Column = ({ column }: { column: ColumnType }) => {
    const { tasks, addEmptyTask, deleteTask, updateTask } = useTaskEvent(column)
    const [tasksHook, setTasksHook] = useState<TaskModel[]>([])

    useEffect(() => {
        setTasksHook(tasks)
    }, [tasks])

    return (
        <Box >
            <Stack direction={'row'}>
                <Heading
                    fontSize='md'
                    letterSpacing='wide'
                // mb={4}
                >
                    <Badge
                        rounded='lg'
                        colorScheme={ColumnColorScheme[column]}
                        py={1}
                        px={2}
                    >
                        {column}
                    </Badge>
                </Heading>
                <IconButton
                    size="xs"
                    w="full"
                    color={useColorModeValue('gray.500', 'gray.400')}
                    bgColor={useColorModeValue('gray.100', 'gray.700')}
                    _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
                    py={2}
                    variant="solid"
                    onClick={addEmptyTask}
                    colorScheme="black"
                    aria-label="add-task"
                    icon={<AddIcon />}
                />
            </Stack>
            <Stack
                direction={{ base: 'row', md: 'column' }}
                bg={useColorModeValue('gray.50', 'gray.900')}
                css={{ backdropFilter: 'blur(5px)' }}
                h={{ base: 200, md: 380 }}
                p={4}
                mt={2}
                spacing={4}
                rounded="lg"
                boxShadow="md"
                overflow="auto"
            >
                {tasksHook && tasksHook.length > 0 ? (tasksHook?.map((task, index) => (
                    <Task key={task.id} index={index} task={task} onDelete={deleteTask} onUpdate={updateTask}/>
                )))
                    : <Heading as={'h5'} size='sm'>no task here!!!</Heading>
                }
            </Stack>
        </Box>
    )
}

export default Column