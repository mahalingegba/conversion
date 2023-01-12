import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Conversion';
  showMsg = true;
  color = 'green';
  userName: 'Maadevaa';
  switchVal = 65;
  buttnClick(event) {
    console.log('Maadevaa');
  }

  users = [
    { userId: '10', name: 'Maadevaaa' },
    { userId: '20', name: 'John' },
    { userId: '30', name: 'jenny' },
    { userId: '40', name: 'Germany' },
    { userId: '50', name: 'farmer' },
  ];
  colorVal = 'blue';
  placeValue = 'Please Enter a value.';

  hrefVal = 'Google.com';
  updatedLink = 'duckduckgo';
  twoWay = 'Maadevaa';
  readFirstName() {
    console.log(this.twoWay);
  }
  showAlert(event) {
    alert('Hello...' + event);
  }
  ConsoleLog() {
    console.log('Maadevaa...');
  }

  user = {
    id: '56',
    name: 'Maadevaa',
    DOB: '12/11/1997',
    currency: '6.50',
    city: 'Bangalore',
  };
  userInfo = [
    {
      id: '56',
      name: 'Maadevaa',
      DOB: '12/11/1997',
      currency: '6.50',
      city: 'Bangalore',
      contryCode: 'IND',
      contact: 963296567,
    },
    {
      id: '52',
      name: 'Maadevaa',
      DOB: '12/11/1997',
      currency: '6.50',
      city: 'Tumkur',
      contryCode: 'US',
      contact: 334466567,
    },
  ];

  userInfo2 = {
    id: '56',
    name: 'Maadevaa',
    DOB: '12/11/1997',
    currency: '6.50',
    city: 'Bangalore',
    contryCode: 'IND',
    contact: '+91963296567',
  };

  formatPhone() {
    console.log(this.userInfo2.contact);
  }
}
