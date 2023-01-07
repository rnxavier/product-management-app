import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    imageWidth: number = 100;
    showImage: boolean = true;
    
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
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this.listFilter = "Apple";
}

}