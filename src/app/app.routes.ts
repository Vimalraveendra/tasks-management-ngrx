import { Routes } from '@angular/router';

import { NoTasksComponent } from './tasks/no-tasks/no-tasks.component';
import { UserTaskComponent } from './users/user-task/user-task.component';
import { usersRoutes } from './users/users.route';

export const routes: Routes = [
    {
       path:'',
       component:NoTasksComponent
    },{
        path:'users/:userId',
        component:UserTaskComponent,
        children:usersRoutes

    }
];
