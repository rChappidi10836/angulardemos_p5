import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  @Input()
  account:{
    name: string;
    status: string;
  };



  @Input()
  id: number;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  changeStatus(newstatus: string){
    this.accountService.updateStatus(this.id, newstatus);
  }

  accountDelete(){
    this.accountService.accountDelete(this.id);
  }
}
