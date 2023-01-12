import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-id',
  templateUrl: './order-id.component.html',
  styleUrls: ['./order-id.component.css'],
})
export class OrderIdComponent implements OnInit {
  Query1 = '';
  Query2 = '';
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((data) => {
      this.Query1 = data.id2;
      this.Query2 = data.id3;
    });
  }

  ngOnInit(): void {}
}
