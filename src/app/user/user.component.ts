import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  name = 'toto';
  email = 'toto@esprit.tn';
  address = 'rue d\'usine Chotrana Ariana';
  hobbies = ['Music','Movies','Sports'];
  show = false
  myForm : FormGroup
  myButton="afficher"
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name : new FormControl(),
      lastName: new FormControl()
    })
  }
  changeStatus(){
   if(this.show===false){
    this.myButton="masquer"
    this.show = true
   }
   else 
   {
    this.myButton="afficher"
    this.show = false
   }
  }
  supprimer(index){
    this.hobbies.splice(index,1)
    console.log(this.hobbies);
    
  }
  submitBook(){

  }
 
}
