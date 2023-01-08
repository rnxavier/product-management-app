import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle: string = "Product List";
    imageWidth: number = 100;
    showImage: boolean = true;
    errorMessage: string = "";
    sub!: Subscription
    
    private _listFilter: string = "";
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log("List filter is:", value);
        this.filteredProducts = this.performFilter(value)
        console.log(this.filteredProducts)
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

   // private _productService;
    // constructor(productService: ProductService) {
    //     this._productService = productService;
    // }
    //SHORTHAND
    constructor(private productService: ProductService) {

    }

toggleImage(): void {
    this.showImage = !this.showImage  
}

performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
        (item: IProduct) => item.productName.toLocaleLowerCase().includes(filterBy))
}

onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
}

ngOnInit(): void {
    //We need to subscribe to the observable to receive data and notifications
    this.sub = this.productService.getProducts().subscribe({
        next: products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err 
    });
}

ngOnDestroy(): void {
    this.sub.unsubscribe
}

}