import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css'],
})
export class ProductsIdComponent implements OnInit {
  paramsQuery1 = '';
  paramsQuery2 = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramsQuery1 = data.id;
      //this.paramsQuery2 = data.id1;
    });
  }

  ngOnInit(): void {}
  updateSearch() {}
}
