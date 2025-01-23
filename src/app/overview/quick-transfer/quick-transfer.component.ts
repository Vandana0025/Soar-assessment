import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface User {
  image: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-quick-transfer',
  imports: [FormsModule, CommonModule],
  templateUrl: './quick-transfer.component.html',
  styleUrl: './quick-transfer.component.css',
})
export class QuickTransferComponent {
  @ViewChild('userGrid', { static: true }) userGrid!: ElementRef;

  users: User[] = [
    { image: 'assets/avatar.jpeg', name: 'Livia Bator', role: 'CEO' },
    { image: 'assets/avatar.jpeg', name: 'Randy Press', role: 'Director' },
    { image: 'assets/avatar.jpeg', name: 'Workman', role: 'Designer' },
    { image: 'assets/avatar.jpeg', name: 'Potter', role: 'Designer' },
    { image: 'assets/avatar.jpeg', name: 'Smith', role: 'Developer' },
  ];

  amount: any = '525.50';

  scrollLeft() {
    this.userGrid.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollRight() {
    this.userGrid.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }
}
