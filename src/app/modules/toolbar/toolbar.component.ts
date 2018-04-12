import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog,
              public loginService: LoginService) {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.loginForm.valid && result) {
        this.loginService.getLogin(result.value.username, result.value.password).subscribe(data => {
          console.log('DATA', data);
        });
      }
    });
  }

}
