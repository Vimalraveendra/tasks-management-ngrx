
export const tasksActionsType={
        ADD_TASK:'[Tasks] AddTask',
        REMOVE_TASK:'[Tasks] RemoveTask',
        SAVE_TASK:'[Tasks] SaveTask',
        LOAD_TASKS:'[Tasks] LoadTasks',
        SET_TASKS:'[Tasks] SetTasks',
    }


export interface ITask {
    id: string;
    userId: number;
    title: string;
    summary: string;
    dueDate: string;
  }
  export interface ITaskState{
    tasks:ITask[]
  }
  
  export interface INewTaskData {
    title: string;
    summary: string;
    date: string;
  }
  