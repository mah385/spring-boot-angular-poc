import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  private createUser(): void {
    console.log(
      '%c inside UserListComponent => createUser method',
      'color:green'
    );

    this.userService.createUser(this.user).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res, null, 2));
        this.redirectToShowAllUsersPage();
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  }

  onCreateUserSubmit() {
    console.log(
      '%c inside UserListComponent => onCreateUserSubmit method',
      'color:green'
    );
    console.log(JSON.stringify(this.user, null, 2));
    this.createUser();
  }

  redirectToShowAllUsersPage() {
    this.router.navigate(['/showAllUsers']);
  }
}
