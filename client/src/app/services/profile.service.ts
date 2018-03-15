import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response} from '@angular/http';

@Injectable()
export class ProfileService {
  base_URL="http://localhost:3000/profile";

  constructor( private http:Http) { }

  createProfile(){
    
  }

  getProfile(id){
    return this.http.get(`${this.base_URL}/${id}`)
    .map(res => res.json());
  }
// editar profile
   patchItem(item):Observable<any>{
    return this.http.patch(`${this.base_URL}/${item._id}`, item)
    .map((res:Response)=>res.json())
    .map(item=>item)
    .catch(e=>{
      console.log(e);
      return Observable.throw(e);
    })
  }

}




