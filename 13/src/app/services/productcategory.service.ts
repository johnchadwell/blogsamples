import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductCategory} from '../models/productcategory';
import { Observable } from 'rxjs';
//import config from '../../assets/config.json';
import { environment } from '../../environments/environment';

//const JCOI_ENDPOINT = environment.apiUrl + '/api/v1/ProductCategories';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private httpClient: HttpClient) {}

  
  get(): Observable<ProductCategory[]> {
    console.log("environment.apiUrl: " + environment.apiUrl);
    return this.httpClient.get<ProductCategory[]>(environment.apiUrl + '/api/v1/ProductCategories');
  }  
  // public get2(): Observable<ProductCategory[]> {
  //   console.log("environment.apiUrl: " + environment.apiUrl);
  //   return this.httpClient.get<ProductCategory[]>(environment.apiUrl + '/api/v1/ProductCategories');
  // }  

   create(payload:ProductCategory){
    console.log("payload: " + payload);
    return this.httpClient.post<ProductCategory>(environment.apiUrl + '/api/v1/ProductCategory', payload);
  }

   getById(id: number): Observable<ProductCategory> {
    console.log("getById: " + id);
    console.log("environment.apiUrl: " + environment.apiUrl);
    var url = environment.apiUrl + `/api/v1/ProductCategory/${id}`;
    console.log("url: " + url);
    return this.httpClient.get<ProductCategory>(url);
  }
   
  update(payload: ProductCategory): Observable<ProductCategory> {
   return this.httpClient.put<ProductCategory>(
    environment.apiUrl + `/api/v1/ProductCategory/${payload.productCategoryId}`,
    payload
   );
  }

  delete(id: number) {
    //const headers = { 'Method': 'DELETE' };
    return this.httpClient.delete(environment.apiUrl + `/api/v1/ProductCategory/${id}`);
  }
}
