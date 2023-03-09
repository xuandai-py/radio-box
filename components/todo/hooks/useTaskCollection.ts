import { v4 as uuidv4 } from 'uuid'
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/model";
import {useLocalStorage} from 'usehooks-ts'

export default function useTaskCollection() {
    return useLocalStorage<{ [key in ColumnType]: TaskModel[] }>('tasks', {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                heading: 'Task 1 use()',
                color: 'blue.300'
            },
        ],
        'On Going': [
            {
                id: uuidv4(),
                column: ColumnType.ON_GOING,
                heading: 'Task 2 use()',
                color: 'yellow.300'
            },
        ],
        Pending: [
            {
                id: uuidv4(),
                column: ColumnType.PENDING,
                heading: 'Task 3 use()',
                color: 'red.300'
            },
        ],
        Completed: [
            // {
            //     id: uuidv4(), 
            //     column: ColumnType.COMPLETED,
            //     heading: 'Task 4 use()',
            //     color: 'green.300'
            // },
        ],

    })
}