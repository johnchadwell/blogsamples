import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product';
import { Observable } from 'rxjs';
import {PagedResults} from '../models/responses/pagedresults';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + '/api/v1/Products');
  }  

  getAndSort(sort_by: string, sort_type: string): Observable<Product[]> {
    var url = environment.apiUrl + `/api/v1/Products/${sort_by}/${sort_type}`;
    return this.httpClient.get<Product[]>(url);
  }
  getBySubCatAndSort(subcategoryid: number, sort_by: string, sort_type: string): Observable<Product[]> {
    var url = environment.apiUrl + `/api/v1/Products2/${subcategoryid}/${sort_by}/${sort_type}`;
    return this.httpClient.get<Product[]>(url);
  }

  getBySubCatPaged(subcategoryid: number,page: number, itemsPerPage: number): Observable<PagedResults> {
    var url = environment.apiUrl + `/api/v1/ProductsBySubCatPaged/${subcategoryid}/${page}/${itemsPerPage}`;
    return this.httpClient.get<PagedResults>(url);
  }

  getProductsPaged2(page: number, itemsPerPage: number): Observable<PagedResults> {
    var url = environment.apiUrl + `/api/v1/ProductsPaged2/${page}/${itemsPerPage}`;
    return this.httpClient.get<PagedResults>(url);
  }
  
  getBySubCatSortAndPage(subcategoryid: number, sort_by: string, sort_type: string, page: number, itemsPerPage: number): Observable<PagedResults> {
    var url = environment.apiUrl + `/api/v1/ProductsSortAndPage/${subcategoryid}/${sort_by}/${sort_type}/${page}/${itemsPerPage}`;
    return this.httpClient.get<PagedResults>(url);
  }

  create(payload:Product){
    return this.httpClient.post<Product>(environment.apiUrl + '/api/v1/Product', payload);
  }

   getById(id: number): Observable<Product> {
    var url = environment.apiUrl + `/api/v1/Product/${id}`;
    return this.httpClient.get<Product>(url);
  }
  getBySubCategoryId(id: number): Observable<Product[]> {
    var url = environment.apiUrl + `/api/v1/Products/Subcategory/${id}`;
    return this.httpClient.get<Product[]>(url);
  }
  
  update(payload: Product): Observable<Product> {
   return this.httpClient.put<Product>(
    environment.apiUrl + `/api/v1/Product/${payload.productId}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + `/api/v1/Product/${id}`);
  }

}
