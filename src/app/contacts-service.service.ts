import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceService {
  constructor() {}
  getContacts() {
    const contactList = [
      { contactId: 1, contactName: 'Maadevaa' },
      { contactId: 2, contactName: 'Javascript' },
      { contactId: 2, contactName: 'CSS' },
    ];
    return contactList;
  }
}
