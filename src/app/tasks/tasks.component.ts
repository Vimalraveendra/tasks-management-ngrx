import { Component, DestroyRef, inject, input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable,map,} from "rxjs";
import { IUser } from "../store/users/users.types";
import { selectUsers } from "../store/users/users.selector";
import { AsyncPipe } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { selectTasks } from "../store/tasks/tasks.selector";
import { ITask } from "../store/tasks/tasks.types";


@Component({
   selector:'app-tasks',
   standalone:true,
   imports:[AsyncPipe,TaskComponent],
   templateUrl:"./tasks.component.html",
   styleUrl:"./tasks.component.css"

})
export class TasksComponent implements OnInit{
    userId=input.required();
    private store=inject(Store);
    private activatedRoute=inject(ActivatedRoute)
    private destroyRef=inject(DestroyRef)
     userTasks$!:Observable<ITask[]>;

    ngOnInit(): void {

        const subscription =this.activatedRoute.paramMap.subscribe({
             next:(paramMap)=>{
              let userId=paramMap.get('userId')||""
              this.userTasks$=this.store.select(selectTasks)
              .pipe((map((userTask:ITask[])=>userTask.filter(user=>user.userId=== +userId))))
             }
          })
          this.destroyRef.onDestroy(()=>subscription.unsubscribe())
          }
        
    }
