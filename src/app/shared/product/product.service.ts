import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducts} from "../../models/main-page/products.interface";
import {apiBaseUrl} from "../environments/environment";
import {IApiResponse} from "../../models/apiResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductQuickShow(productId: number): Observable<IApiResponse<IProducts>> {
    return this.http.get<IApiResponse<IProducts>>(`${apiBaseUrl}/product/${productId}/quickView`)
  }
}
