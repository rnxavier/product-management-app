import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Information for ";
  product: IProduct | undefined;
  errorMessage: string = "";
  chevronLeft = faChevronLeft;

  //ActivatedRoute is used to get the params, Router is used for navigation

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
     
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getProduct(id);
      this.pageTitle += id
    }
    
  }

  handleBackClick(): void {
    this.router.navigate(["/products"])
  }

}
