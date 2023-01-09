import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Information for "
  constructor(private route: ActivatedRoute) {
     
  }

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get("productName")
    this.pageTitle += productName
  }

}
