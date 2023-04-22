import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/AccountService';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountService],
})
export class AccountsComponent implements OnInit {

accounts:{name: string; status: string }[]=[ ];

  constructor(private accountService: AccountService) { 
    this.accounts = this .accountService.accounts;
  }

  ngOnInit(): void {
  }

  
}
