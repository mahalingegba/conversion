import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  orderStatus: any;
  data: Observable<any>;
  constructor() {}

  ngOnInit(): void {
    new Observable((observer) => {
      setTimeout(() => {
        observer.next('InProgress...');
      }, 4000);

      setTimeout(() => {
        observer.next('Processing...');
      }, 6000);

      setTimeout(() => {
        observer.next('Completed...');
      }, 8000);
    }).subscribe((status) => {
      this.orderStatus = status;
    });
  }
}
