import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
//importo los valores de seleccion de mis apis
import categories from '../apiselectors/quoteCategories'
import zodiac from '../apiselectors/zodiac'
import {ProfileService} from '../services/profile.service'
import {SessionService} from '../services/session.service'
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

import $ from 'jquery';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {
  quotesCategory:Array<string>= categories;
  zodiacSign: Array<string>=zodiac;
  uploader:FileUploader = new FileUploader({
    url: `http://localhost:3000/profile`
  });
  user: any;
  constructor( private sessionS: SessionService,private profileS:ProfileService, private route:Router) { }

  ngOnInit() {
   // $('select').material_select();
 // tengo que hacer llamada al loggedin servicio y sacar el req.user 
  this.sessionS.loggedIn()
    .subscribe(result => {
      console.log(result);
      this.user=result._id;
      console.log(this.user);
    })
  
  }

  submitForm(newForm) {

    //form es un objeto interno de la instancia FileUploader
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('sign', newForm.value.sign);
     // form.append('birthday', newForm.value.birthday);
      form.append('quote', newForm.value.quote)
    };
    // uploaderAll hace la llamada post por mi al back
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['private']);
  }
}
