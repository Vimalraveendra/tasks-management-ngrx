import { Component,inject,input } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { ITaskState } from '../../store/tasks/tasks.types';
import { Store } from '@ngrx/store';
import { addTask } from '../../store/tasks/tasks.actions';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  form =new FormGroup({
    enteredTitle:new FormControl(' ',{
      validators:[Validators.required]
    }),
    enteredSummary:new FormControl(' ',{
      validators:[Validators.required]
    }),
    enteredDate:new FormControl(' ',{
      validators:[Validators.required]
    })
  })
  private store=inject(Store<{tasks:ITaskState}>)
  private router = inject(Router)

  onSubmit(){
    const {enteredTitle,enteredSummary,enteredDate}=this.form.value;
     const newTask={
        id: new Date().getTime().toString(),
        userId: +this.userId(),
        title: enteredTitle||"",
        summary: enteredSummary||"",
        dueDate:enteredDate||""
     }
    this.store.dispatch(addTask({payload:newTask}))
    this.router.navigate(['/users',this.userId(),'tasks'],{
      replaceUrl:true
    })
  }

}
