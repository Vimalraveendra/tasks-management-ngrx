import { inject, Injectable } from "@angular/core";
import { createEffect, ofType,Actions } from "@ngrx/effects";
import { loadUsersStart,loadUsersSuccess,loadUsersFailed } from "./users.actions";
import { switchMap,map, of, catchError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IUser } from "./users.types";

@Injectable()
export class UsersEffects{
 private actions$=inject(Actions)
 private httpClient= inject(HttpClient)
    loadUsers$=createEffect(()=>this.actions$.pipe(
        ofType(loadUsersStart),
        switchMap((action)=>{
              return this.httpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users").pipe(
                map((value:IUser[])=>loadUsersSuccess({payload:value})),
                catchError((err:string)=>of(loadUsersFailed({payload:err}))
             ))
        })
    ))

}