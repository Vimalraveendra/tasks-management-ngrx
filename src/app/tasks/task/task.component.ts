import { Component, inject, input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { ITask } from '../../store/tasks/tasks.types';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { removeTask } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 task=input.required<ITask>()
 private store = inject(Store)

 onComplete(){
   this.store.dispatch(removeTask({payload:this.task().id}))
 }
}
