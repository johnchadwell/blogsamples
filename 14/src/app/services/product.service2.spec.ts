import { TestBed, tick, fakeAsync} from '@angular/core/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
//import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product } from '../models/product';
import { of,  defer, throwError } from 'rxjs';

// import { asyncData, asyncError } from '../../../testing/async-observable-helpers';

const FAKE_PRODUCTS: Product[] = 
[
  {
      productId: 1, name: "Whitewood S4S Kiln-dried Lumber", description: "2-in x 4-in x 10-ft", unitPrice: 14.92, isDeleted: false,
      productGuid: "FC968274-961E-4905-9B87-0D25F1286D67",
      productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
      productSubCategory: {productSubCategoryId: 1, name: "Dimensional Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}}
  },
  {
      productId: 2, name: "Fir S4S Kiln-dried Lumber", description: "2-in x 6-in x 8-ft",unitPrice: 6.75,isDeleted: false,
      productGuid: "DB84C14F-F19D-413E-ABB6-BC1E66A8CED4",
      productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
      productSubCategory: {productSubCategoryId: 1, name: "Dimensional Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}},
  }
]

// // Create async observable error by rejecting the promise
// export function asyncError<T>(errorObject: any) {
//   return defer(() => Promise.reject(errorObject));
// }

describe('ProductService', () => {
  let productService: ProductService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpClient: HttpClient;
  // let controller: HttpTestingController;
  let testUrl = '/api/v1/Products'

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule(
      {   
        imports: [HttpClientTestingModule],
        providers: [
          ProductService,
          {
            provide: HttpClient,
            useValue: httpClientSpy
          }
        ]        

      }
    );
    productService = TestBed.inject(ProductService);
    // httpClient = TestBed.inject(HttpClient);

    //controller = TestBed.inject(HttpTestingController);    
    // productService = new ProductService(httpClientSpy);    

    // httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  //https://medium.com/@piyalidas.it/jasmine-unit-test-case-of-angular-api-service-get-method-e1963bed69fe
  it('should get all products1', (done: DoneFn) => {
    console.log("products1");
  
    httpClientSpy.get.and.returnValue(of(FAKE_PRODUCTS));
  
    productService.get().subscribe({
      next: (products) => {
        expect(products).toEqual(FAKE_PRODUCTS);
        done();
      },
      error: done.fail,
    });
    // expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    //expect(httpClientSpy.get).
    
    // expect(httpClientSpy.get.calls.count()).withContext('one Call').toBe(1);
  });  

  //https://medium.com/@piyalidas.it/jasmine-unit-test-case-of-angular-api-service-get-method-e1963bed69fe
  it('should get all products1', fakeAsync(() => {
    console.log("products1");
  
    httpClientSpy.get.and.returnValue(of(FAKE_PRODUCTS));
  
    productService.get().subscribe({
      next: (products) => {
        expect(products).toEqual(FAKE_PRODUCTS);
        tick();
        //flush();
        //flushMicrotasks();
      },
      error: fail,
    });
    // expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    //expect(httpClientSpy.get).
    
    // expect(httpClientSpy.get.calls.count()).withContext('one Call').toBe(1);
  }));  


});
