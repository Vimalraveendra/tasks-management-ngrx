import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IState, IUser } from '../store/users/users.types';
import { Store } from '@ngrx/store';

import { AsyncPipe } from '@angular/common';
import { UserComponent } from "./user/user.component";
import { selectUsers } from '../store/users/users.selector';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserComponent],
  standalone:true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   users$:Observable<IUser[]>
   constructor(private store :Store<{reducer:IState}>){
     this.users$=store.select(selectUsers)
   }
   
}
