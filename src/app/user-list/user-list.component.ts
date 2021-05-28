import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userId: any;
  users?: User[];
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(): void {
    console.log(
      '%c inside UserListComponent => getUserList method',
      'color:green'
    );
    this.userService.getUserList().subscribe(
      (res: any) => {
        this.users = res.data;
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  }

  loadUserForUpdate(userId: string) {
    this.router.navigate(['loadUserForUpdate', userId]);
  }

  deleteUserById(userId: string) {
    console.log(
      '%c inside UserListComponent => deleteUserById method',
      'color:green'
    );
    console.log(`userId: ${userId}`);
    this.userService.deleteUserById(userId).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res, null, 2));
        window.location.reload();
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  }
}
