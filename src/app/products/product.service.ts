import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    getProducts() : IProduct[] {
        return [
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
    }
}