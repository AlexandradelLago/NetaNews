import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';
import {ProfileService} from '../services/profile.service';
import {SessionService} from '../services/session.service';

@Injectable()
export class ApisService {
  // me ha dicho andrei que mejor las declare en el backend y las llamo desde el front y de ahi le paso variables de busqueda etc
  //base_URL="http://quotes.rest/qod.json";
  base_URL="http://quotes.rest/qod.json?category="
  base_URL_horoscope="http://sandipbgt.com/theastrologer/api/horoscope";
  // hay que poner noticias o everthing o sources o headlines
  //base_URL_news="https://newsapi.org/v2/everything?q=bitcoin&apiKey=
  //https://newsapi.org/v2/top-headlines?country=us&category=business
  //https://newsapi.org/v2/sources?apiKey=API_KEY
  API_KEY="3b4af330ce004204bc4122457cb415a6";
  constructor(private http:Http, private profileS: ProfileService, private sessionS: SessionService) { }
  
  handleError(e) {
    return Observable.throw(e.json().message);
  }


  //obtengo quote de mi api en el front --ok!
  getQuote(category){
   console.log("esta es mi categoria en el servicio"+category);
    return this.http.get(`${this.base_URL}${category}`)
      .map(res => res.json())
      .catch(err=>this.handleError(err))
  }

  //obtengo el signo de mi api en el front -- ok!
  getHoroscope(sign){
    return this.http.get(`${this.base_URL_horoscope}/${sign}/today`)
      .map(res => res.json())
      .catch(err=>this.handleError(err))
  }

  getNews(language, country, qword, category){

  }

}
