import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  private loginUrl = 'http://localhost:4444/api/v1/login';

  getLogin(username, password) {
    // TODO: why headers are not working?
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(this.loginUrl, {withCredentials: true});
  }
}
