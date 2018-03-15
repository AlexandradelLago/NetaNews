import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import {ApisService} from "../services/apis.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  name: string = "";
  quote: string = "";
  horoscope:string="";

  constructor(private session: SessionService, private apiS : ApisService) { }

  ngOnInit() {
    this.session.loggedIn()
      .subscribe(user => {
        this.name = user.name;
        this.username = user.username;
      });

      this.apiS.getQuote()
      .subscribe(quote =>{
          this.quote=quote.contents.quotes[0].quote;
          
      });

      this.apiS.getHoroscope('libra')
      .subscribe(h =>{
        this.horoscope=h.horoscope;
        
    });


  }
}
