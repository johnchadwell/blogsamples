import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Product} from '../models/product';
import { Observable, catchError, throwError } from 'rxjs';
import {PagedResults} from '../models/responses/pagedresults';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Product[]> {
    console.log("[ProductService.get]");
    
    return this.httpClient.get<Product[]>(environment.apiUrl + '/api/v1/Products')
    .pipe(catchError(this.handleError));

    // // use this to simply throw HttpErrorResponse back to client subscribe
    // .pipe(catchError(this.handleError1));
    // .pipe(catchError(error => {
    //   // Handle the error here
    //   throw error;
    // }));
  }  

  getBySubCatPaged(subcategoryid: number,page: number, itemsPerPage: number): Observable<PagedResults> {
    console.log("getBySubCatPaged.page: " + page)
    console.log("getBySubCatPaged.itemsPerPage: " + itemsPerPage)
    var url = environment.apiUrl + `/api/v1/ProductsBySubCatPaged/${subcategoryid}/${page}/${itemsPerPage}`;
    console.log("url: " + url);
    return this.httpClient.get<PagedResults>(url);
  }

  create(payload:Product){
    console.log("payload: " + payload);
    return this.httpClient.post<Product>(environment.apiUrl + '/api/v1/Product', payload)
    .pipe(catchError(this.handleError));
  }

   getById(id: number): Observable<Product> {
    console.log("getById: " + id);
    var url = environment.apiUrl + `/api/v1/Product/${id}`;
    console.log("url: " + url);
    return this.httpClient.get<Product>(url)
    .pipe(catchError(this.handleError));
  }
  
  update(payload: Product): Observable<Product> {
   return this.httpClient.put<Product>(
    environment.apiUrl + `/api/v1/Product/${payload.productId}`, payload)
   .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.httpClient.delete(environment.apiUrl + `/api/v1/Product/${id}`)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log("handleError: " + JSON.stringify(error));
    let errorMessage = 'Unknown error!';
    // if (error.error instanceof ErrorEvent) {
    if (error.status === 0) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      console.log("errorMessage1: " + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
      console.log("errorMessage2: " + errorMessage);
    }
    window.alert("alert: " + errorMessage);
    return throwError(() => new Error(errorMessage))
  }

  handleError1(error: HttpErrorResponse) {
    console.log("handleError: " + JSON.stringify(error));
    return throwError(error);
  }
}



