import { createReducer,on } from "@ngrx/store";
import { IState} from "./users.types";
import { loadUsersFailed, loadUsersStart, loadUsersSuccess } from "./users.actions";

export const initialState:IState={
   users:[],
   isLoading:false,
   error:''
}

export const usersReducer=createReducer(
   initialState,
   on(loadUsersStart,(state)=>({...state,isLoading:true})),
   on(loadUsersSuccess,(state,action)=>({...state,users:action.payload,isLoading:false,error:''})),
   on(loadUsersFailed,(state,action)=>({...state,error:action.payload, isLoading:false,users:[]}))
)