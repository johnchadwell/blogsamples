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
        tick(1000);
      },
      error: fail,
    });
    // expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    //expect(httpClientSpy.get).
    
    // expect(httpClientSpy.get.calls.count()).withContext('one Call').toBe(1);
  }));  


  // it('should return an error when the server returns a 404', (done: DoneFn) => {

  //   console.log("returns a 404");

  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found',
  //   });
  
  //   httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  //   productService.get().subscribe(
  //     data => fail('Should have failed with 404 error'),
  //     (error: HttpErrorResponse) => {
  //       expect(error.status).toEqual(404);
  //       expect(error.error).toContain('404 error');
  //       done();
  //   });

    
  //   // productService.get().subscribe({
  //   //   next: (product) => {
  //   //     console.log("NEXT");
  //   //     console.log("product: " + JSON.stringify(product));
  //   //     done.fail('expected an error, not products');
  //   //   },
  //   //   error:  (error) => {
  //   //     console.log("error: " + JSON.stringify(error));
  //   //     expect(error.message).toContain('test 404 error');
  //   //     done();
  //   //   },
  //   // });
  // });

  // it('should return an error when the server returns a 404', () => {

  //   console.log("returns a 404");

  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found',
  //   });
  
  //   httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  //   productService.get().subscribe(
  //     data => fail('Should have failed with 404 error'),
  //     (error: HttpErrorResponse) => {
  //       expect(error.status).toEqual(404);
  //       expect(error.error).toContain('404 error');
  //   });

  // });

  ////// STOP
  ///////////////////////////////////////////

  // it('should get all products2', function() {
  //   console.log("products2");

  //   httpClientSpy.get.and.returnValue(of(FAKE_PRODUCTS));
  //   productService.get().subscribe(
  //     (products) => {
  //       expect(products).toEqual(FAKE_PRODUCTS);
  //     }
  //   );
  //   expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  //   // // const req = controller.expectOne('#{apiUrl}#/api/v1/Products');
  //   // //const req = controller.expectOne('https://localhost:5003/api/v1/Products');
  //   // const req = controller.expectOne(() => true);
  //   // expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
  //   // expect(req.request.method).toBe('GET');
  //   // req.flush(FAKE_PRODUCTS);
  //   // controller.verify();

  // });

  // it('getUsers() return an error when the server returns a 404 error', () => {
  //   productService.get().subscribe(
  //     () => {},
  //     (error: any) => {
  //       expect(error).toEqual(error);
  //     }
  //   );
  //   controller.expectOne({
  //     method: 'GET',
  //   }).flush("", { status: 404, statusText: "Not Found" });
  // });

  
  // it('should return an error when the server returns a 404', (done: DoneFn) => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found',
  //   });
  
  //   httpClientSpy.get.and.returnValue(of(errorResponse));
  
  //   productService.get().subscribe({
  //     next: (products) => done.fail('expected an error, not products'),
  //     error: (error) => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     },
  //   });
  // });  

  // it('can test for 404 error', () => {
  //   const emsg = 'deliberate 404 error';
  //   httpClientSpy.get.and.returnValue(of(FAKE_PRODUCTS));
  //   productService.get().subscribe({
  //     // next: () => fail('should have failed with the 404 error'),
  //     next: (products) => {},      
  //     error: (error: HttpErrorResponse) => {
  //       expect(error.status).withContext('status').toEqual(404);
  //       expect(error.error).withContext('message').toEqual(emsg);
  //     },
  //   });
  //   const req = controller.expectOne(() => true);
  //   // Respond with mock error
  //   req.flush(emsg, { status: 404, statusText: 'Not Found' });
  // });

  // it('should return an error when the server returns a 404', (done: DoneFn) => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found',
  //   });
  
  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   productService.get().subscribe({
  //       // next: products => {},
  //     next: (product) => done.fail('expected an error, not product'),
  //     error: (error) => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     },
  //   });
  // });

  // it('error1', (done) => {
  //   const mockError = {error: 'someError'} as ErrorEvent;
  //   productService.get().subscribe({
  //         next: products => {},
  //         error: error  => {
  //           expect(error.message).toContain('test 404 error');
  //           done();
  //         }
  //   });

    // productService.get().subscribe(() => {}, (thrownError) =>{

    //   expect(thrownError.error).toEqual(mockError);
    //   done();
    // });
    // expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    // const req =  controller.expectOne(environment.apiUrl + '/api/reset/abc');
    // req.error(mockError);
// });

  // it('rejects when post throws', async () => {
  //   const param = { id: 10 };
  //   const errorResponse = new Error('httpService.post error');
  //   spyOn(productService, 'get').and.returnValue(throwError(errorResponse));
  
  //   await productService.get().catch(err => {
  //     expect(err).toBe('Subscribe error: httpService.post error');
  //   });
  // });

  // it('get return an error when the server returns a 404', (done: DoneFn) => {

  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse)); // call http get method
  //   productService.get().subscribe({
  //     next: products => done.fail('expected an error, not products'),
  //     error: error  => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     }
  //   });
  //   expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  // });


  // it('getUsers() return an error when the server returns a 404', (done: DoneFn) => {
  //   httpClientSpy.get.and.returnValue(of({})); // call http get method
  //   productService.get().subscribe({
  //     next: heroes => done.fail('expected an error, not heroes'),
  //     error: error  => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     }
  //   });

  //   productService.get().subscribe(
  //     {
  //       next: (products) => {},      
  //       error: error => {
  //         expect(error).toEqual(error);        },
  
  //     }


  //   );
  //   expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  // });

});
