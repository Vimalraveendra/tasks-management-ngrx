import { createAction, props } from "@ngrx/store";
import { IUser,usersActionTypes } from "./users.types";


export const loadUsersStart=createAction(
    usersActionTypes.LOAD_USERS_START,
)

export const loadUsersSuccess=createAction(
    usersActionTypes.LOAD_USERS_SUCCESS,
    props<{payload:IUser[]}>()
)

export const loadUsersFailed= createAction(
    usersActionTypes.LOAD_USERS_FAILED,
    props<{payload:string}>()
)