import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class ApisService {
  // me ha dicho andrei que mejor las declare en el backend y las llamo desde el front y de ahi le paso variables de busqueda etc
  base_URL="http://quotes.rest/qod.json";
  base_URL_horoscope="http://sandipbgt.com/theastrologer/api/horoscope"
  constructor(private http:Http) { }
  
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  //Primera forma de enviar datos a nuestro Back-End
  getQuote(){
    return this.http.get(this.base_URL)
      .map(res => res.json())
      .catch(err=>this.handleError(err))
  }

  getHoroscope(sign){
    return this.http.get(`${this.base_URL_horoscope}/${sign}/today`)
      .map(res => res.json())
      .catch(err=>this.handleError(err))
  }

}
