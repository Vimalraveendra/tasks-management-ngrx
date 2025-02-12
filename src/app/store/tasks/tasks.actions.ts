import { createAction,props } from "@ngrx/store";
import { ITask, ITaskState, tasksActionsType } from "./tasks.types";


export const loadTasks=createAction(
    tasksActionsType.LOAD_TASKS,
)
export const setTasks=createAction(
    tasksActionsType.SET_TASKS,
    props<{payload:ITask[]}>()
)

export const addTask=createAction(
    tasksActionsType.ADD_TASK,
    props<{payload:ITask}>()
)

export const removeTask=createAction(
    tasksActionsType.REMOVE_TASK,
    props<{payload:string}>()
)