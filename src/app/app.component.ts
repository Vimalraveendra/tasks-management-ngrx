import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Store } from '@ngrx/store';
import { loadUsersStart } from './store/users/users.actions';
import { UsersComponent } from "./users/users.component";
import { RouterOutlet } from '@angular/router';
import { loadTasks } from './store/tasks/tasks.actions';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'tasks-management';
  private store = inject(Store)

 ngOnInit(): void {
     this.store.dispatch(loadUsersStart())
     this.store.dispatch(loadTasks())
 }
}
