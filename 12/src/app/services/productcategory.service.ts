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
    return this.httpClient.get<ProductCategory[]>(environment.apiUrl + '/api/v1/ProductCategories');
  }  

  create(payload:ProductCategory){
    return this.httpClient.post<ProductCategory>(environment.apiUrl + '/api/v1/ProductCategory', payload);
  }

   getById(id: number): Observable<ProductCategory> {
    var url = environment.apiUrl + `/api/v1/ProductCategory/${id}`;
    return this.httpClient.get<ProductCategory>(url);
  }
   
  update(payload: ProductCategory): Observable<ProductCategory> {
   return this.httpClient.put<ProductCategory>(
    environment.apiUrl + `/api/v1/ProductCategory/${payload.productCategoryId}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + `/api/v1/ProductCategory/${id}`);
  }
}
