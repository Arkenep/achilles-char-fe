import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'app';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.loginService.getLogin()
      .subscribe(data => {
        console.log('DATA', data);
      });
  }
}
