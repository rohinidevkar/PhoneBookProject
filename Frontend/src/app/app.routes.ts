import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

export const routes: Routes = [  
    {path: 'addnew', component: AddContactComponent},
    {path: '', component: ContactListComponent},
    {path: 'users/:id', component: UpdateContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class  PhoneBookRoutingModule{ }
