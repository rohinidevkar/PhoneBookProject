import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASIC_URL = ["http://localhost:8080/"];

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(private http: HttpClient) {
  }

  addContact (pb: any): Observable<any> {
    return this.http.post(BASIC_URL + "addnew", pb);
  }
  getAllList():Observable<any>{
    return this.http.get(BASIC_URL+"allList");
  }
  editList(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "users/" + id);
  } 
  updateList(id: number, pb: any): Observable<any>{
    return this.http.put(BASIC_URL + "users/" + id, pb);
  } 
}
