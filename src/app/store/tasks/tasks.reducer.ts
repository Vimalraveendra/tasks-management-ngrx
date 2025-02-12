import { createReducer, on } from "@ngrx/store";
import {  ITaskState, tasksActionsType } from "./tasks.types";
import { addTask, removeTask, setTasks } from "./tasks.actions";

const initialState:ITaskState={
    tasks:[]
}

export const  tasksReducer=createReducer(
  initialState,
  on(addTask,(state,{payload})=>({...state,tasks:[...state.tasks, payload]})),
  on(removeTask,(state,{payload})=>({...state,tasks:[...state.tasks.filter(task=>task.id!==payload)]})),
  on(setTasks,(state,action)=>({...state,tasks:action.payload}))
)