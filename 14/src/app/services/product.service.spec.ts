import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest  } from '@angular/common/http/testing';
import { Product } from '../models/product';
import {PagedResults} from '../models/responses/pagedresults';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

let controller: HttpTestingController;

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {   
        imports: [HttpClientTestingModule],
      }
    );
    productService = TestBed.inject(ProductService);
    controller = TestBed.inject(HttpTestingController);    

  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should get all products', function() {
    console.log("product.get");

    productService.get().subscribe(
      (products) => {
        expect(products).toEqual(FAKE_PRODUCTS);
      expect(req.request.url.includes('/api/v1/Product')).toBeTrue();
      expect(req.request.method).toBe('GET');
  }
    );

    const req = controller.expectOne(() => true);
    req.flush(FAKE_PRODUCTS);
    controller.verify();

  });

  it('should get product by Id', function() {
    console.log("product.getById");

    productService.getById(1).subscribe(
      (product) => {
        expect(product).toEqual(FAKE_PRODUCTS[0]);
      }
    );


    // const req = controller.expectOne('#{apiUrl}#/api/v1/Products');
    // const req = controller.expectOne('https://localhost:5003/api/v1/Products');
    const req = controller.expectOne(() => true);
    expect(req.request.url.includes('/api/v1/Product/1')).toBeTrue();
    expect(req.request.method).toBe('GET');
    req.flush(FAKE_PRODUCTS[0]);
    controller.verify();

  });


  // with catchError and handleError - server side
  it('throws server side error', () => {

    productService.get().subscribe({
      next: (products) => {
        console.log("products: " + JSON.stringify(products))
        fail('Should have failed with 404 error');
      },
      // error: (error: HttpErrorResponse) => {
      error: (error: string) => {

        console.log("error: " + error)
        expect(error).toMatch('404 Not Found');
        // expect(error).toMatch('999 Whatever');
        expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
        expect(req.request.method).toBe('GET');
      }

    });

    const req = controller.expectOne(() => true);
    // req.flush('blah blah', { status: 999, statusText: 'Whatever'});
    req.flush('404 error', { status: 404, statusText: 'Not Found'});
    controller.verify();

    
    //req.error({} => {new ErrorEvent()})
    //req.error(new ProgressEvent('error'), { status: 401 });
  });


  it('throws server side error using ProgressEvent', () => {

    productService.get().subscribe({
      next: (products) => {
        console.log("products: " + JSON.stringify(products))
        fail('Should have failed with 404 error');
      },
      // error: (error: HttpErrorResponse) => {
      error: (error: string) => {

        console.log("error: " + error)
        expect(error).toMatch('500 Internal Error');
        expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
        expect(req.request.method).toBe('GET');
      }

    });

    const req = controller.expectOne(() => true);
    const mockError = new ProgressEvent('API error');
    req.error(mockError, { status: 500, statusText: 'Internal Error'});
    controller.verify();
  });

  it('should create product', function() {
    console.log("products.create");

    const product = {
      productId: -1,  name: "Fir S4S Kiln-dried Lumber", description: "2-in x 4-in x 12-ft", unitPrice: 6.32, isDeleted: false,
      productGuid: "3E8C64F8-CDCA-4241-ABA7-926B9CE90792",
      productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
      productSubCategory: {
        productSubCategoryId: 1,
        name: "Dimensional Lumber",
        isDeleted: false,
        productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}
        }
      }

    productService.create(product).subscribe(
      (products) => {
        expect(products.productId).toEqual(3);
        console.log("req.request.url: " + req.request.url);
        expect(req.request.url.includes('/api/v1/Product')).toBeTrue();
        expect(req.request.method).toBe('POST');
    });

    const req = controller.expectOne(() => true);
    product.productId = 3;
    req.flush(product);
    controller.verify();

  });

  it('should delete product', function() {
    console.log("products.delete");

    productService.delete(1).subscribe({
      next: (data) => {
        console.log("data: " + JSON.stringify(data))
        expect(req.request.url.includes('/api/v1/Product/1')).toBeTrue();
        expect(req.request.method).toBe('DELETE');
        expect(data).toEqual("");
        // how to test for status 204 if not error
    },
      error: (error: string) => {
        console.log("error: " + error)
        fail('Should have deleted successfully');
      }
    });

    const req = controller.expectOne(() => true);
    req.flush('', { status: 204, statusText: 'No Data' });
    controller.verify();

  });

  it('should update product', function() {
    console.log("products.delete");

    const product = {
      productId: 1,  name: "Fir S4S Kiln-dried Lumber", description: "2-in x 4-in x 12-ft", unitPrice: 9.99, isDeleted: false,
      productGuid: "3E8C64F8-CDCA-4241-ABA7-926B9CE90792",
      productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
      productSubCategory: {
        productSubCategoryId: 1,
        name: "Dimensional Lumber",
        isDeleted: false,
        productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}
        }
      }


    productService.update(product).subscribe({
      next: (data) => {
        console.log("data: " + JSON.stringify(data))
        expect(req.request.url.includes('/api/v1/Product')).toBeTrue();
        expect(req.request.method).toBe('PUT');
        expect(data).toEqual(product);
        // how to test for status 204 if not error
    },
      error: (error: string) => {
        console.log("error: " + error)
        fail('Should have updated successfully');
      }
    });

    const req = controller.expectOne(() => true);
    req.flush(product);
    controller.verify();

  });


  it('should get paged products', function() {
    console.log("products.getByCatPaged");

  const pagedResults = {
    results: FAKE_PRODUCTS,
    currentPage: 1,
    pageCount: 1,
    pageSize: 5,
    rowCount: 2,
    firstRowOnPage: 1,
    lastRowOnPage: 2
  } 
  
    productService.getBySubCatPaged(1,1,5).subscribe({
      next: (data) => {
        console.log("data: " + JSON.stringify(data))
        expect(req.request.url.includes('/api/v1/ProductsBySubCatPaged/1/1/5')).toBeTrue();
        expect(req.request.method).toBe('GET');
        expect(data).toEqual(pagedResults);
    },
      error: (error: string) => {
        console.log("error: " + error)
        fail('Should have returned paged results');
      }
    });

    const req = controller.expectOne(() => true);
    req.flush(pagedResults);
    controller.verify();

  });
});

