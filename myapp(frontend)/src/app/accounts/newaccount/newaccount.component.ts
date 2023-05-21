import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css'],
})
export class NewaccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string){
   this.accountService.addAccount(accountName, accountStatus);
  }
}
