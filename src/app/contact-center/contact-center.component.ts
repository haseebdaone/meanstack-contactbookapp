import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-center',
  templateUrl: './contact-center.component.html',
  styleUrls: ['./contact-center.component.css'],
  providers: [ContactService]
})
export class ContactCenterComponent implements OnInit {

 contacts : Contacts[];
 showForm: boolean = false;
 noUpdate: boolean = true;
 selectedContact: Contacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(resContacts => this.contacts = resContacts);
  }

  receivedContact(contact: Contacts){
    this.selectedContact = contact;
    this.showForm = false;
    this.noUpdate = true;
  }

  newContact(){
    this.showForm = true;
    this.selectedContact = null;
  }

  onSubmit(contact: Contacts){
    this.contactService.addContact(contact)
    .subscribe(resNewContact => {
      this.contacts.push(resNewContact);
      this.showForm = false;
      this.selectedContact = resNewContact;
    });
  }

  updateHere(){
    this.noUpdate = false;
  }

  updatingNow(contact: Contacts){
    this.contactService.updateContact(contact)
    .subscribe(resUpdated => {
      this.noUpdate = true;
      this.selectedContact = resUpdated;
    });
  }

  requestDelete(contact: Contacts){
    this.contactService.deleteContact(contact)
    .subscribe(resDeleted => {
      let contactArray = this.contacts;
      for(var i = 0; i< contactArray.length; i++){
        if(contactArray[i]._id === resDeleted._id){
          contactArray.splice(i, 1);
        }
      }
    });
    this.selectedContact = null;
  }

}
