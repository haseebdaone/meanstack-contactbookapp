import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contacts } from '../contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() updateContact;
  @Output() updateOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  updatingContact(){
    this.updateOut.emit(this.updateContact);
  }
}
