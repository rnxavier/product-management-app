import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

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

    products: IProduct[] = [
        {
        "productId": 2,
        "productName": "Apple iPad",
        "productCode": "iO2-00234",
        "releaseDate": "March 18, 2022",
        "description": "Latest release tablet",
        "price": 849.99,
        "starRating": 3.8,
        "imageUrl": "../assets/ipad.jpeg"
    },
    {
        "productId": 5,
        "productName": "Apple iMac",
        "productCode": "iO5-00487",
        "releaseDate": "June 5, 2021",
        "description": "Desktop monitor with built-in PC",
        "price": 1299,
        "starRating": 4.2,
        "imageUrl": "../assets/imac.jpeg"
    }
];

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
    this.listFilter = "Apple";
}

}