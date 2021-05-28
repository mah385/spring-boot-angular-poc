import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userId: any;
  user: User = new User();

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.userService.getUserById(this.userId).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res, null, 2));
        this.user = res.data;
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  }

  updateUserById() {
    console.log(
      '%c inside UpdateUserComponent => updateUserById method',
      'color:green'
    );

    this.userService.updateUserById(this.userId, this.user).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res, null, 2));
        this.redirectToShowAllUsersPage();
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  }

  onUpdateUserSubmit() {
    this.updateUserById();
  }

  redirectToShowAllUsersPage() {
    this.router.navigate(['/showAllUsers']);
  }
}
