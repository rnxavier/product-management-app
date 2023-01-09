import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Information for ";
  product: IProduct | undefined;
  chevronLeft = faChevronLeft

  constructor(private route: ActivatedRoute, private router: Router) {
     
  }


  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get("productName")
    this.pageTitle += productName
    this.product = {
        productId: 1,
        productName: "Apple iPad",
        productCode: "iO2-00234",
        releaseDate: "March 18, 2022",
        description: "Latest release tablet",
        price: 849.99,
        starRating: 3.8,
        imageUrl: "../assets/ipad.jpeg"
    };
  }


  handleBackClick(): void {
    this.router.navigate(["/products"])
  }

}
