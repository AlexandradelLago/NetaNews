import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { ProfileService } from "../services/profile.service";
import {ApisService} from "../services/apis.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  email: string = "";
  quote: string = "";
  horoscope:string="";
  profile:Object={};
  sign:string="virgo";
  category:string="";
  news = {
    articles: [],

  };
  

  constructor(private session: SessionService, private apiS : ApisService, private profileS: ProfileService) { }

  ngOnInit() {
    
    this.session.loggedIn()
      .subscribe(user => {
        this.email= user.email;
        this.username = user.username;

        this.profileS.get(user._id)
        .subscribe(profile => {
          this.profile= profile;

          this.apiS.getQuote(profile.quote)
          .subscribe(quote =>{
            console.log("esta es la categoria"+this.category);
            console.log(quote);
              this.quote=quote.contents.quotes[0].quote;
              
          });

          this.apiS.getHoroscope(profile.sign)
          .subscribe(h =>{
            this.horoscope=h.horoscope;
            
          });
        console.log(profile.news);
        this.apiS.getNews(profile.news)
        .subscribe(news =>{
          this.news=news;
        });
  

      });
  });
}

}

