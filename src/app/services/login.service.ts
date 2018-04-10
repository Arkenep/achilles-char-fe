import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  private loginUrl = 'http://localhost:4444/api/v1/login';

  getLogin() {
    return this.http.get(this.loginUrl, {withCredentials: true});
  }
}
