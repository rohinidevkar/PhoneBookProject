import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhoneBookService } from '../service/phone-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css'
})
export class UpdateContactComponent {

  updateContactForm !: FormGroup;

  id: number = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute,
    private pbs: PhoneBookService,
    private fb: FormBuilder,
    private router: Router ){ }

    ngOnInit(){
      this.updateContactForm = this.fb.group({
        name : [null, Validators.required],
        email : [null, [Validators.required, Validators.email]],
        mobNo: [null, Validators.required],
      })
      this.editList();
    }
    editList(){
      this.pbs.editList(this.id).subscribe((res) => {
        console.log(res);
        this.updateContactForm.patchValue(res);
      })
    }
    updateList(){
      this.pbs.updateList(this.id, this.updateContactForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl('');
      });
    }
    cancel() {
      this.router.navigateByUrl('/');
    }
   saveAndAdd() {
    if (this.updateContactForm.valid) {
      this.pbs.addContact(this.updateContactForm.value).subscribe((res) => {
        console.log(res);
        this.updateContactForm.reset(); 
        const nameField = document.getElementById('name');
        if (nameField) {
          nameField.focus();
        }
      });
    }
   }

}
