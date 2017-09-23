import { AccountFormComponent } from './account/account-form.component';
import * as console from 'console';
import { DirectiveDeclaration } from 'codelyzer';
import { Direct } from 'protractor/built/driverProviders';
import { Declaration } from '@angular/language-service';
import { Component, Directive, ViewChild } from '@angular/core';
import {Account} from './account/account.model';
import{AccountsList} from './account/accounts_list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountsList]
})
export class AppComponent {

public _accounts:Array<Account> = [
{
  id: 1,
  title: 'Bank Xyz',
  description: 'this is my main bank account.',
  balance: 501.2
},
new Account(2, "Bank asd", "my secret account", 1024.10)
];

private _nextId = 3;

public createAccError:string = "";
private accLimit:number = 3;
private createAcc(newAccount: Account){
  this.createAccError = "";
  if(this._accounts.length < this.accLimit){
    newAccount.id = this._nextId++;
    this._accounts.push(newAccount);
    this.form.resetForm();
  }else{
    this.createAccError = "Only "+ this.accLimit + " account(s) allowed.";
  }
}

@ViewChild(AccountFormComponent) form:AccountFormComponent;

// private createAcc(newAccount:Account){
//   // this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value))
//   // this._selected.push(false);
//   // this._nextId ++;
//   // titleEl.value = "";
//   // descEl.value = "";
//   // balEl.value = 0;

//   newAccount.id = this._nextId++;
//   this._accounts.push(newAccount);
// }

private removeAcc(index:number){
  this._accounts.splice(index, 1);
  // this._selected.splice(index, 1);
}



  // private currentUser: User = new User("Teste", "teste@test.com");
  
  // private hideEmail: boolean = false;

  // private toggle(){
  //   this.hideEmail = !this.hideEmail;
  // }

  // private users:Array<User> = [
  //   {username: 'User1', email: 'user1@ig.com'},
  //   {username: 'User2', email: 'user2@ig.com'},
  //   {username: 'User3', email: 'user3@ig.com'},
  //   {username: 'User4', email: 'user4@ig.com'},
  //   {username: 'User5', email: 'user5@ig.com'},
  // ];

  // private changeMail(newMail: string){
  //   this.currentUser.email = newMail;
  // }

  // private keyPress(event: KeyboardEvent){
  //   if(event.keyCode == 13){
  //     let inputElement = <HTMLInputElement>event.target;
  //     this.changeMail(inputElement.value);
  //   }
  // }

  //private disableInput: boolean = false;

  // private isDisabled():boolean{
  //   return this.disableInput;
  // }

  // private isBlueBg: boolean = true;
  // private bgColor: string = 'red';

  // private getUsername():string{
  //   return this.currentUser.username;
  // }

}

class User{
  email: string;
  username: string;
  constructor(username: string, email: string) {
    this.email = email;
    this.username = username;
  }
}