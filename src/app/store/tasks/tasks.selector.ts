import { createSelector } from "@ngrx/store";
import { ITaskState } from "./tasks.types";


export const selectTaskState=(state:{tasks:ITaskState})=>state.tasks;

export const selectTasks=createSelector(
    selectTaskState,
    (tasks)=>tasks.tasks
)