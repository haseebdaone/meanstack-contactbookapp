import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Contacts } from './contacts';

@Injectable()
export class ContactService {

  private contactsUrl = '/contacts';
  private updateUrl = '/contacts/';
  private deleteUrl = '/contacts/';

  constructor(private http: Http) { }

  getContacts(){
    return this.http.get(this.contactsUrl)
      .map((response: Response) => response.json());
  }

  addContact(contact: Contacts){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.contactsUrl, JSON.stringify(contact), options)
    .map((response: Response) => response.json());
  }

  updateContact(contact: Contacts){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.updateUrl + contact._id, JSON.stringify(contact), options)
    .map((response: Response) => response.json());
  }

  deleteContact(contact: Contacts){
    return this.http.delete(this.deleteUrl + contact._id)
    .map((response: Response) => response.json());
  }

}
