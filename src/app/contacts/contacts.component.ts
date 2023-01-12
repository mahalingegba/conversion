import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor(private ContactService: ContactServiceService) {}
  contactList: any = [];
  ngOnInit(): void {
    this.contactList = this.ContactService.getContacts();
  }
}
