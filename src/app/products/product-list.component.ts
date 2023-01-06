import { Component } from "@angular/core";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
    pageTitle: string = "RJDevs Product Management";
    imageWidth: number = 100;
    showImage: boolean = false;

    products: any[] = [
        {
        "productId": 2,
        "productName": "iPad",
        "productCode": "i02-00234",
        "releaseDate": "March 18, 2022",
        "description": "Latest release tablet",
        "price": 849.99,
        "starRating": 4.7,
        "imageURL": "../assets/ipad.jpeg"
    },
    {
        "productId": 5,
        "productName": "iMac",
        "productCode": "i20-00487",
        "releaseDate": "June 5, 2021",
        "description": "Desktop monitor with built-in PC",
        "price": 1299,
        "starRating": 4.9,
        "imageURL": "../assets/imac.jpeg"
    }
];

toggleImage(): void {
    this.showImage = !this.showImage  
}

}