import React, { useState, useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import useColumnDrop from './hooks/useColumnDrop';
import useColumnTasks from './hooks/useColumnTasks';
import { ColumnType } from './utils/enums';
import Task from './task';
import { TaskModel } from './utils/models';


const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: 'gray',
  'In Progress': 'blue',
  PENDING: 'red',
  Completed: 'green',
};

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const [tasksHook, setTasksHook] = useState<TaskModel[]>([])

  useEffect(() => {
    setTasksHook(tasks)
  }, [tasks])

  // const ColumnTasks = tasks?.map((task, index) => (
  //   <Task
  //     key={task.id}
  //     task={task}
  //     index={index}
  //     onDropHover={swapTasks}
  //     onUpdate={updateTask}
  //     onDelete={deleteTask}
  //   />
  // ));

  return (
    <Flex direction={{ base: 'row', md: 'column' }} gap={2}>
      <Stack direction={{ base: 'column', md: 'row' }} minW={{ base: 24, md: 'unset' }}>
        <Heading fontSize="md" letterSpacing="wide">
          <Badge
            px={2}
            w='full'
            py={1}
            rounded="lg"
            align='center'
            colorScheme={ColumnColorScheme[column]}
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
        ref={dropRef}
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 150, md: '100%' }}
        p={{ base: 2, md: 3 }}
        w={{ base: 'full', md: '200' }}
        spacing={4}
        // bg={useColorModeValue('#F7FAFC', '#171923')}
        // css={{ backdropFilter: 'blur(5px)' }}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.85 : 1}
      >
        {tasksHook && tasksHook?.length > 0 ? (tasksHook?.map((task, index) => (
          <Task key={task.id} index={index} task={task} onDelete={deleteTask} onUpdate={updateTask} onDropHover={swapTasks} />
        )))
          : <Heading as={'h5'} size='sm'>no task here!!!</Heading>
        }
      </Stack>
    </Flex>
  );
}

export default Column;