import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTask, loadTasks, removeTask, setTasks } from "./tasks.actions";
import { switchMap, tap, withLatestFrom,of } from "rxjs";
import { ITask, ITaskState } from "./tasks.types";
import { Store } from "@ngrx/store";
import { selectTasks } from "./tasks.selector";


@Injectable()
export class TasksEffects{
   private actions$=inject(Actions)
   private store=inject(Store<{tasks:ITaskState}>)
    loadTasks$=createEffect(()=>this.actions$.pipe(
        ofType(loadTasks),
        switchMap(()=>{
           const storedTasks= localStorage.getItem('userTasks')
           if(storedTasks){
            let userTasks:ITask[]=JSON.parse(storedTasks)
            return of(setTasks({payload:userTasks}))
           }else{
            return of(setTasks({payload:[]}))
           }
            
        })
    ))


    saveTasks$=createEffect(()=>this.actions$.pipe(
      ofType(addTask,removeTask),
      withLatestFrom(this.store.select(selectTasks)),
       tap(([action,tasks])=>{
           console.log('action',action)
           localStorage.setItem('userTasks',JSON.stringify([...tasks]))
       })
    ),{dispatch:false})
}