import { createSelector } from "@ngrx/store";
import { IState } from "./users.types";


export const selectState=(state:{reducer:IState})=>state.reducer;

export const selectUsers=createSelector(
  selectState,
  (reducer)=>reducer.users
)

export const selectIsLoading=createSelector(
  selectState,
  (reducer)=>reducer.isLoading
)
export const selectError=createSelector(
  selectState,
  (reducer)=>reducer.error
)
