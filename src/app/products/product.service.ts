import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private productUrl = "http://localhost:8000/products";

    constructor(private http: HttpClient) {

    }

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
    }
}