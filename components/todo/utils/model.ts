import { ColumnType } from './enums'

export interface TaskModel {
    id: string
    heading: string
    column: ColumnType
    color: string
}

export interface DragItem {
    index: number,
    id: TaskModel['id'],
    from: ColumnType
}