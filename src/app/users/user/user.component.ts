import { Component, input } from '@angular/core';
import { IUser } from '../../store/users/users.types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 user=input.required<IUser>()
}
