import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductCategory} from '../models/productcategory';
import {ProductSubCategory} from '../models/productsubcategory';
import { Observable } from 'rxjs';
//import config from '../../assets/config.json';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSubCategoryService {

  constructor(private httpClient: HttpClient) {}


  get(): Observable<ProductSubCategory[]> {
    console.log("environment.apiUrl: " + environment.apiUrl);

    return this.httpClient.get<ProductSubCategory[]>(environment.apiUrl + '/api/v1/ProductSubCategories');
  }  

  getByCategoryId(id: number): Observable<ProductSubCategory[]> {
    console.log("getByCategoryId: " + id);
    return this.httpClient.get<ProductSubCategory[]>(environment.apiUrl + `/api/v1/ProductSubCategories/Category/${id}`);
  }

   create(payload:ProductSubCategory){
    console.log("payload: " + payload);
    return this.httpClient.post<ProductSubCategory>(environment.apiUrl + '/api/v1/ProductSubCategory', payload);
  }

   getById(id: number): Observable<ProductSubCategory> {
    console.log("getById: " + id);
    console.log("environment.apiUrl: " + environment.apiUrl);

    var url = environment.apiUrl + `/api/v1/ProductSubCategory/${id}`;
    console.log("url: " + url);
    return this.httpClient.get<ProductSubCategory>(url);
  }
   
  update(payload: ProductSubCategory): Observable<ProductSubCategory> {
   return this.httpClient.put<ProductSubCategory>(
    environment.apiUrl + `/api/v1/ProductSubCategory/${payload.productSubCategoryId}`,
    payload
   );
  }

  delete(id: number) {
    //const headers = { 'Method': 'DELETE' };
    return this.httpClient.delete(environment.apiUrl + `/api/v1/ProductSubCategory/${id}`);
  }
}
