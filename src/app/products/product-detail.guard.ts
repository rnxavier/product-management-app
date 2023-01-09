import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  product: IProduct | undefined;
  errorMessage: string = "";


  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  constructor(private router: Router, private productService: ProductService) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get("id"));
      if(isNaN(id) || id < 1 || id != this.product?.productId) {
        alert("Invalid product id");
        this.router.navigate(["/products"]);
        return false;
      }
    return true;
  }
  
}
