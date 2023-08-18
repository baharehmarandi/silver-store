import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiBaseUrl} from "../../shared/environments/environment";
import {IApiResponse} from "../../models/apiResponse.interface";
import {IPriceSilverResponse} from "../../models/silver-price.interface";
import {ICategory} from "../../models/category.interface";
import {IApiResponseList} from "../../models/apiResponseList.interface";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getSilverPrice(): Observable<IApiResponse<IPriceSilverResponse>> {
    return this.http.get<IApiResponse<IPriceSilverResponse>>(`${apiBaseUrl}/silverPrice`)
  }

  getCategoryList(): Observable<IApiResponseList<ICategory>> {
    return this.http.get<IApiResponseList<ICategory>>(`${apiBaseUrl}/category`)
  }
}
