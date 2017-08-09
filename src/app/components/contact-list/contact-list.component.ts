import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  inputs: ['contacts'],
  outputs: ['contactOut']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactOut = new EventEmitter();

  clickedContact(contact){
    this.contactOut.emit(contact);
  }

}
