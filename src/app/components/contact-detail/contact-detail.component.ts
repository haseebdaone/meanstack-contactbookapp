import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() displayedContact;

  @Output() updateForm = new EventEmitter();
  @Output() deleteThis = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateContact(){
    this.updateForm.emit()
  }

  deleteContact(){
    this.deleteThis.emit(this.displayedContact);
  }

}
