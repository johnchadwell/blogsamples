import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product';
import { Observable } from 'rxjs';
import {PagedResults} from '../models/responses/pagedresults';
//import config from '../../assets/config.json';
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
    console.log("url: " + url);
    return this.httpClient.get<Product[]>(url);
  }
  getBySubCatAndSort(subcategoryid: number, sort_by: string, sort_type: string): Observable<Product[]> {
    console.log("subcategoryid: " + subcategoryid);
    var url = environment.apiUrl + `/api/v1/Products2/${subcategoryid}/${sort_by}/${sort_type}`;
    console.log("url: " + url);
    return this.httpClient.get<Product[]>(url);
  }

  getBySubCatPaged(subcategoryid: number,page: number, itemsPerPage: number): Observable<PagedResults> {
    console.log("getBySubCatPaged.page: " + page)
    console.log("getBySubCatPaged.itemsPerPage: " + itemsPerPage)
    var url = environment.apiUrl + `/api/v1/ProductsBySubCatPaged/${subcategoryid}/${page}/${itemsPerPage}`;
    console.log("url: " + url);
    return this.httpClient.get<PagedResults>(url);
  }

  getProductsPaged2(page: number, itemsPerPage: number): Observable<PagedResults> {
    var url = environment.apiUrl + `/api/v1/ProductsPaged2/${page}/${itemsPerPage}`;
    console.log("url: " + url);
    return this.httpClient.get<PagedResults>(url);
  }
  
  getBySubCatSortAndPage(subcategoryid: number, sort_by: string, sort_type: string, page: number, itemsPerPage: number): Observable<PagedResults> {
    console.log("subcategoryid: " + subcategoryid);
    var url = environment.apiUrl + `/api/v1/ProductsSortAndPage/${subcategoryid}/${sort_by}/${sort_type}/${page}/${itemsPerPage}`;
    console.log("url: " + url);
    return this.httpClient.get<PagedResults>(url);
  }

  create(payload:Product){
    console.log("payload: " + payload);
    return this.httpClient.post<Product>(environment.apiUrl + '/api/v1/Product', payload);
  }

   getById(id: number): Observable<Product> {
    console.log("getById: " + id);
    var url = environment.apiUrl + `/api/v1/Product/${id}`;
    console.log("url: " + url);
    return this.httpClient.get<Product>(url);
  }
  getBySubCategoryId(id: number): Observable<Product[]> {
    console.log("getById: " + id);
    var url = environment.apiUrl + `/api/v1/Products/Subcategory/${id}`;
    console.log("url: " + url);
    return this.httpClient.get<Product[]>(url);
  }
  
  update(payload: Product): Observable<Product> {
   return this.httpClient.put<Product>(
    environment.apiUrl + `/api/v1/Product/${payload.productId}`,
    payload
   );
  }

  delete(id: number) {
    //const headers = { 'Method': 'DELETE' };
    return this.httpClient.delete(environment.apiUrl + `/api/v1/Product/${id}`);
  }

}
