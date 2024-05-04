import { Component } from '@angular/core';
import { PhoneBookService } from '../service/phone-book.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  users: any = [];
  constructor(private pbs: PhoneBookService){
  }
  ngOnInit(){
    this.getAllList();
  }
  getAllList(){
    this.pbs.getAllList().subscribe((data)=>{
      console.log(data);
      this.users = data;
    })
  }
}
