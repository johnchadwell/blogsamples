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

  getBySubCatPaged(subcategoryid: number,page: number, itemsPerPage: number): Observable<PagedResults> {
    var url = environment.apiUrl + `/api/v1/ProductsBySubCatPaged/${subcategoryid}/${page}/${itemsPerPage}`;
    return this.httpClient.get<PagedResults>(url);
  }

  create(payload:Product){
    return this.httpClient.post<Product>(environment.apiUrl + '/api/v1/Product', payload);
  }

  update(payload: Product): Observable<Product> {
   return this.httpClient.put<Product>(environment.apiUrl + `/api/v1/Product/${payload.productId}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + `/api/v1/Product/${id}`);
  }

}
