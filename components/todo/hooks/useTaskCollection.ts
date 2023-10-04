import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

export default function useTaskCollection() {
  return useLocalStorage<{ [key in ColumnType]: TaskModel[] }>('tasks', {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 1 use()',
        color: 'blue.300'
      },
    ],
    'In Progress': [
      {
        id: uuidv4(),
        column: ColumnType.ON_GOING,
        title: 'Task 2 use()',
        color: 'yellow.300'
      },
      {
        id: uuidv4(),
        column: ColumnType.ON_GOING,
        title: 'Task 2 use()',
        color: 'yellow.300'
      },
    ],
    PENDING: [
      {
        id: uuidv4(),
        column: ColumnType.PENDING,
        title: 'Task 3 use()',
        color: 'red.300'
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4 use()',
        color: 'green.300'
      },
    ],

  })
}
