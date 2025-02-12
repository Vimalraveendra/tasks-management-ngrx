import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState, IUser } from '../../store/users/users.types';
import { AsyncPipe } from '@angular/common';
import { selectUsers } from '../../store/users/users.selector';
import { Observable,map,tap } from 'rxjs';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-user-task',
  standalone:true,
  imports: [AsyncPipe,RouterOutlet,RouterLink],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent implements OnInit {
   
  private store = inject(Store<{reducer:IState}>)
  private activatedRoute=inject(ActivatedRoute)
  private  destroyRef=inject(DestroyRef)
 userName$!:Observable<string>
 
  ngOnInit(): void {
  const subscription =this.activatedRoute.paramMap.subscribe({
     next:(paramMap)=>{
      let userId=paramMap.get('userId')||""
      this.userName$=this.store.select(selectUsers).pipe((map((userData:IUser[])=>userData.find(user=>user.id=== +userId)?.name||"")))
     }
  })
  this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

}



