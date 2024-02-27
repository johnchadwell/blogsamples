import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductCategory} from '../models/productcategory';
import {ProductSubCategory} from '../models/productsubcategory';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSubCategoryService {

  constructor(private httpClient: HttpClient) {}


  get(): Observable<ProductSubCategory[]> {
    return this.httpClient.get<ProductSubCategory[]>(environment.apiUrl + '/api/v1/ProductSubCategories');
  }  

  getByCategoryId(id: number): Observable<ProductSubCategory[]> {
    return this.httpClient.get<ProductSubCategory[]>(environment.apiUrl + `/api/v1/ProductSubCategories/Category/${id}`);
  }

   create(payload:ProductSubCategory){
    return this.httpClient.post<ProductSubCategory>(environment.apiUrl + '/api/v1/ProductSubCategory', payload);
  }

   getById(id: number): Observable<ProductSubCategory> {
    var url = environment.apiUrl + `/api/v1/ProductSubCategory/${id}`;
    return this.httpClient.get<ProductSubCategory>(url);
  }
   
  update(payload: ProductSubCategory): Observable<ProductSubCategory> {
   return this.httpClient.put<ProductSubCategory>(
    environment.apiUrl + `/api/v1/ProductSubCategory/${payload.productSubCategoryId}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + `/api/v1/ProductSubCategory/${id}`);
  }
}
