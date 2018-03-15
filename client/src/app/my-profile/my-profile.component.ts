import { Component, OnInit } from '@angular/core';
import categories from '../apiselectors/quoteCategories'
import {ProfileService} from '../services/profile.service'
import {SessionService} from '../services/session.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  quotesCategory:Array<string>= categories;

  constructor(private sessionS:SessionService, private profileS:ProfileService) { }

  ngOnInit() {
    console.log(this.quotesCategory);
  }

}


// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {CardService} from '../services/card.service';
// import {ListService} from '../services/list.service';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {
//   @Input() list;
//   @Output() editTitle = new EventEmitter<any>(); 
//   @Output() removeList = new EventEmitter<any>();
//   @Output() refreshLists = new EventEmitter<any>();
//   showEdit:boolean = false;
//   cards:Array<any>;
//   cardTitle;
//   constructor(
//     private cardService: CardService,
//     private listService: ListService
//   ) { }

//   refreshPapa(){
//     this.refreshLists.emit();
//   }

//   addCard(cardTitle){
//     const newCard = {
//       title:cardTitle,
//       list:this.list._id
//     }
//     this.cardService.addItem(newCard)
//     .subscribe(card=>{
//       this.cardTitle = "";
//       //modificamos la list:
//       this.list.cards.push(card._id);
//       this.listService.patchList(this.list)
//       .subscribe(list=>{
//         //console.log("test")
//         this.refreshLists.emit();
//       })
//     })
//   }

//   deleteList(){
//     if(!confirm("estas seguro?")) return;
//     this.removeList.emit(this.list);
//     this.showEdit = false;
//   }

//   showInput(){
//     this.showEdit = true;
//   }

//   sendModification(){
//     this.editTitle.emit(this.list);
//     this.showEdit = false;
//   }

//   getCards(){
//     this.cardService.fetchItems()
//     .subscribe(cards=>{
//       this.cards = cards;
//     })
//   }

//   ngOnInit() {
//     this.getCards();
//   }

// }