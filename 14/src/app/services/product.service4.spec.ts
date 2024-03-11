import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { Product } from '../models/product';


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

  beforeEach(() => {
    TestBed.configureTestingModule(
      {   
        imports: [HttpClientTestingModule],
      }
    );

  });

  it('should be created', () => {
    let productService = TestBed.inject(ProductService);
    expect(productService).toBeTruthy();
  });


  it(
    'should get products4',
    fakeAsync(
    inject(
      [HttpTestingController, ProductService],
      (controller: HttpTestingController, productService: ProductService) => {
        console.log("products4");
        productService.get().subscribe((products) => {
          expect(products).toEqual(FAKE_PRODUCTS);
        });

        const req = controller.expectOne(() => true);
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url.includes('/api/v1/Products')).toBeTrue();
        expect(req.request.method).toBe('GET');
        req.flush(FAKE_PRODUCTS);
        controller.verify();

  })));


});
