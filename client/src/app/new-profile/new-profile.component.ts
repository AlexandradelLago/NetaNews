import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import categories from '../apiselectors/quoteCategories'
import {ProfileService} from '../services/profile.service'
import {SessionService} from '../services/session.service'
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $: any;

//import $ from 'jquery';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {
  quotesCategory:Array<string>= categories;
  uploader:FileUploader = new FileUploader({
    url: `http://localhost:3000/profile`
  });
  user: any;
  constructor( private sessionS: SessionService,private profileS:ProfileService, private route:Router) { }

  ngOnInit() {
    console.log(this.quotesCategory);
    ($('select') as any).material_select();
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
      form.append('name', newForm.value.name);
      form.append('birthday', newForm.value.birthday);
    };
    // uploaderAll hace la llamada post por mi al back
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['private']);
  }
}
