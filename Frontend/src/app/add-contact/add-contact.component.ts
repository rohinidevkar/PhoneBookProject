import { Component } from '@angular/core';
import { PhoneBookService } from '../service/phone-book.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent { 
  
  addContactForm !: FormGroup;

  constructor(private pbs : PhoneBookService,
    private fb : FormBuilder,
    private router: Router){
  }
  ngOnInit(): void {
    this.addContactForm = this.fb.group({
      name : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      mobNo: [null, Validators.required],
    })
  }
  addContact() {
    this.pbs.addContact(this.addContactForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('');
    });
  }
  cancel() {
    this.router.navigateByUrl('/');
  }
 saveAndAdd() {
  if (this.addContactForm.valid) {
    this.pbs.addContact(this.addContactForm.value).subscribe((res) => {
      console.log(res);
      this.addContactForm.reset(); 
      const nameField = document.getElementById('name');
      if (nameField) {
        nameField.focus();
      }
    });
  }
 }
}

