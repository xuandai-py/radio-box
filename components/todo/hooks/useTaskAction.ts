import { useRef } from "react";
import { useDrag } from "react-dnd";
import { DragItem, TaskModel } from "../utils/model";
import {ItemType} from '../utils/enums'

export function useTaskAction<T extends HTMLElement>({ task, index }: { task: TaskModel, index: number }) {
    const ref = useRef<T>(null)
    const [{isDragging}, drag] = useDrag<DragItem, void, {isDragging: boolean}>({
        type: ItemType.TASK
    })
}