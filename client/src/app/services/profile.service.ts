import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response} from '@angular/http';

@Injectable()
export class ProfileService {
  BASE_URL: string = 'http://localhost:3000';
  options : {withCredentials:true };

  constructor(private http: Http) {}

// new profile
  newProfile () {
    return this.http.post(`${this.BASE_URL}/profile` , this.options )
     .map (res => res.json());
  }

  // read profile
  get(id) {
    return this.http.get(`${this.BASE_URL}/profile/${id}`)
      .map((res) => res.json());
  }
// edit profile
  edit(profile) {
    return this.http.put(`${this.BASE_URL}/profile/${profile.account}`, profile)
      .map((res) => res.json());
  }
// delete profile
  remove(id) {
    return this.http.delete(`${this.BASE_URL}/profile/${id}`)
      .map((res) => res.json());
  }
}






