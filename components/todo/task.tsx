import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, ScaleFade } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { useTaskDragAndDrop } from './hooks/useTaskDragAndDrop';
import { TaskModel } from './utils/models';
import { AutoResizeTextarea } from './AutoResizeTextArea';
type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover,
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        ref={ref}
        as="div"
        role="group"
        position="relative"
        rounded="lg"
        w={{base: 200, md: 'unset'}}
        p={4}
        boxShadow="xl"
        cursor="grab"
        fontWeight="bold"
        userSelect="none"
        bgColor={task.color}
        opacity={isDragging ? 0.5 : 1}
      >
        <IconButton
          position="absolute"
          top={0}
          right={0}
          zIndex={100}
          aria-label="delete-task"
          size="md"
          colorScheme="solid"
          color={'gray.700'}
          icon={<DeleteIcon />}
          opacity={0}
          _groupHover={{
            opacity: 1,
            bgColor: '#1db95457'
          }}
          onClick={handleDeleteClick}
        />
        <AutoResizeTextarea
          value={task.title}
          fontWeight="semibold"
          cursor="inherit"
          border="none"
          p={0}
          resize="none"
          minH={70}
          maxH={{base: 100, md: 200}}
          focusBorderColor="none"
          color="gray.700"
          onChange={handleTitleChange}
        />
      </Box>
    </ScaleFade>
  );
}
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});