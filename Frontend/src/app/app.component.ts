import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhoneBookService } from './service/phone-book.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PhoneBookService],
})
export class AppComponent {
  title = 'PhoneBookProject';
}
