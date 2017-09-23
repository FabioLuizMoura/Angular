import { Account } from './account.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

@Output() created = new EventEmitter<Account>();
  
  private createAcc(titleEl:any, descEl: any, balEl:any){
  
    var newAccount:Account = new Account(0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);

  // titleEl.value = "";
  // descEl.value = "";
  // balEl.value = 0;
}
  @Input('error') error:string;

  @ViewChild('form') form: ElementRef;

  public resetForm(){
    this.form.nativeElement.reset();
  }

}
