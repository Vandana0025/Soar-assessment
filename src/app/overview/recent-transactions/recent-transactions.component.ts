import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Transaction {
  iconClass: string;
  iconColor: string;
  description: string;
  date: string;
  amount: number;
}

@Component({
  selector: 'app-recent-transactions',
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.css',
})
export class RecentTransactionsComponent {
  transactions: Transaction[] = [
    {
      iconClass: 'bx bx-wallet',
      iconColor: '#FFF5D9',
      description: 'Deposit from my Card',
      date: '28 January 2021',
      amount: -850,
    },
    {
      iconClass: 'bx bxl-paypal',
      iconColor: '#E7EDFF',
      description: 'Deposit Paypal',
      date: '25 January 2021',
      amount: 2500,
    },
    {
      iconClass: 'bx bx-dollar-circle',
      iconColor: '#DCFAF8',
      description: 'Jemi Wilson',
      date: '21 January 2021',
      amount: 5400,
    },
  ];
}
