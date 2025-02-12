

export const usersActionTypes={
    LOAD_USERS_START:'[User] LoadUsersStart',
    LOAD_USERS_SUCCESS:'[User] LoadUsersSuccess',
    LOAD_USERS_FAILED:'[User] LoadUsersFailed',
}


export interface IUser {
    id: number;
    avatar?: string;
    name: string;
  }

  export interface IState{
    users:IUser[],
    isLoading:boolean,
    error:string
  }