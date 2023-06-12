import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../common/model/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user = new BehaviorSubject<User>({} as User);
}
