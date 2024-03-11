import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './product.service';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; // Import 
import { Product } from '../models/product';
import { of } from 'rxjs';

// import { environment } from '../../environments/environment';

// let env = {
//   production: true,
//   apiUrl: "http://localhost", 
//   clientId:  '#{clientId}#',
//   authority:  '#{authority}#',
//   redirectUri:  '#{redirectUri}#',
//   scope:  '#{scope}#',
// };




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


describe('ProductService', () => {
  // let productService1: ProductService;
  let productService: ProductService;
  let controller: HttpTestingController;
  // let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {   
        imports: [HttpClientTestingModule],
        // providers: [
        //   {provide: environment, useValue: env}
        // ] 
        // providers: [ProductService] 
        // providers: [
        //   {provide: HttpClient, useValue: httpClient}
        // ] 

      }
    );
    productService = TestBed.inject(ProductService);
    controller = TestBed.inject(HttpTestingController);    
    httpClient = TestBed.inject(HttpClient);

    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // productService1 = new ProductService(httpClientSpy);    

  });
  // afterEach(() => {
  //   controller.verify();
  // });  

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });


  // it('should get all products5', function() {
  //   console.log("products5");

  //   productService.get().subscribe(
  //     (products) => {
  //       expect(products).toEqual(FAKE_PRODUCTS);
  //     }
  //   );


  //   // const req = controller.expectOne('#{apiUrl}#/api/v1/Products');
  //   //const req = controller.expectOne('https://localhost:5003/api/v1/Products');
  //   // const req = controller.expectOne(() => true);
  //   // expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
  //   // expect(req.request.method).toBe('GET');
  //   // req.flush(FAKE_PRODUCTS);
  //   // httpTestingController.verify();

  // });


// // no mock - not real - never calls get
//   it('should get all products0', () => {
//     console.log("products0");
//     // Make an HTTP GET request
//     httpClient.get<Product[]>('/api/v1/Products')
//       .subscribe(data =>
//         // When observable resolves, result should match test data
//         expect(data).toEqual(FAKE_PRODUCTS)
//       );

//     // The following `expectOne()` will match the request's URL.
//     // If no requests or multiple requests matched that URL
//     // `expectOne()` would throw.
//     const req = controller.expectOne('/api/v1/Products');

//     // Assert that the request is a GET.
//     expect(req.request.method).toEqual('GET');

//     // Respond with mock data, causing Observable to resolve.
//     // Subscribe callback asserts that correct data was returned.
//     req.flush(FAKE_PRODUCTS);

//     // Finally, assert that there are no outstanding requests.
//     controller.verify();

//   });

//   // https://angular.io/guide/testing-services
//   // https://stackoverflow.com/questions/52283055/angular-service-testing-cannot-find-name-asyncdata
// it('should get all products1', (done: DoneFn) => {
//   console.log("products1");

//   httpClientSpy.get.and.returnValue(of(FAKE_PRODUCTS));

//   productService1.get().subscribe({
//     next: (products) => {
//       expect(products).toEqual(FAKE_PRODUCTS);
//       done();
//     },
//     error: done.fail,
//   });
//   expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
// });  

  // it('should get all products2', () => {
  //   console.log("products2");

  //   productService.get().subscribe(
  //     (products) => {
  //       expect(products).toEqual(FAKE_PRODUCTS);
  //     }
  //   );


  //   // const req = controller.expectOne('#{apiUrl}#/api/v1/Products');
  //   //const req = controller.expectOne('https://localhost:5003/api/v1/Products');
  //   const req = controller.expectOne(() => true);
  //   expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
  //   expect(req.request.method).toBe('GET');
  //   req.flush(FAKE_PRODUCTS);

  // });

  // it('should get all products3', function() {
  //   console.log("products3");

  //   productService.get().subscribe(
  //     (products) => {
  //       expect(products).toEqual(FAKE_PRODUCTS);
  //     }
  //   );


  //   // const req = controller.expectOne('#{apiUrl}#/api/v1/Products');
  //   //const req = controller.expectOne('https://localhost:5003/api/v1/Products');
  //   const req = controller.expectOne(() => true);
  //   expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
  //   expect(req.request.method).toBe('GET');
  //   req.flush(FAKE_PRODUCTS);

  // });



  // it(
  //   'should get products4',
  //   fakeAsync(
  //   inject(
  //     [HttpTestingController, ProductService],
  //     (controller: HttpTestingController, dataService: ProductService) => {
  //       console.log("products4");
  //       productService.get().subscribe((products) => {
  //         expect(products).toEqual(FAKE_PRODUCTS);
  //       });

  //       const req = controller.expectOne(() => true);

  //       expect(req.cancelled).toBeFalsy();
  //       expect(req.request.responseType).toEqual('json');
  //       expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
  //       expect(req.request.method).toBe('GET');
  //       req.flush(FAKE_PRODUCTS);

  //       controller.verify();

  // })));


});
