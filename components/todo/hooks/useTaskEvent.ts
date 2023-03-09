import { useCallback, useEffect, useState } from "react";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/model";
import useTaskCollection from "./useTaskCollection";
import { v4 as uuidv4 } from 'uuid'
import { genRandomChakraColor } from '../utils/helpers'

export default function useTaskEvent(inColumn: ColumnType) {
    const [tasks, setTasks] = useTaskCollection()
    const columnTasks = tasks[inColumn]

    const addEmptyTask = useCallback(() => {
        console.log(`Addding empty task ${inColumn} column`);
        setTasks((allTasks) => {
            const allTaskInColumn = allTasks[inColumn] // ref to column type
            if (allTaskInColumn.length > 50) {
                console.log('Max task limit');
                return allTasks
            }
            const newTaskInColumn: TaskModel = {
                id: uuidv4(),
                heading: `New ${inColumn} task created`,
                column: inColumn,
                color: genRandomChakraColor('.300')
            }
            return {
                ...allTasks,
                [inColumn]: [newTaskInColumn, ...allTaskInColumn]
            }
        })
    }, [inColumn, setTasks])

    const updateTask = useCallback(
        (id: TaskModel['id'], value: Omit<Partial<TaskModel>, 'id'>) => {
            console.log(`Updating task ${id} with ${JSON.stringify(value)}`);
            setTasks((allTasks) => {
                const taskInColumn = allTasks[inColumn]
                const updateTaskInColumn = taskInColumn.map((task) => task.id === id ? { ...task, ...value } : task)
                return {
                    ...allTasks,
                    [inColumn]: updateTaskInColumn
                }
            })
        }, [inColumn, setTasks])

    const deleteTask = useCallback((id: TaskModel['id']) => {
        console.log(`Deleting task ${id} from ${inColumn} column`);
        setTasks((allTasks) => {
            const taskInColumn = allTasks[inColumn]
            const deleteTaskInColumn = taskInColumn.filter((task) => task.id !== id)
            return {
                ...allTasks,
                [inColumn]: deleteTaskInColumn
            }
        })
    }, [inColumn, setTasks])



    return {
        tasks: columnTasks, // tasks in given column
        addEmptyTask,
        deleteTask,
        updateTask,
    }
}