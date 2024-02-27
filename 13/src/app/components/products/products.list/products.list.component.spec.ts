import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './products.list.component';
import {ProductCategoryServiceStub, ProductSubCategoryServiceStub, ProductServiceStub, OpenDialogMock, OpenEditModalMock} from "./products.list.mock"
// import {ProductCategoryServiceStub, ProductSubCategoryServiceStub, ProductServiceStub, MatDialogStub} from "./products.list.mock"
import {FAKE_PRODUCTS, FAKE_PRODUCTCATEGORY, FAKE_PRODUCTSUBCATEGORY} from "./products.list.mock"
// import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {ProductCategoryService} from '../../../services/productcategory.service';
import {ProductSubCategoryService} from '../../../services/productsubcategory.service';
import { MatDialog} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';

import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatSelectHarness} from '@angular/material/select/testing';
import {MatPaginatorHarness} from '@angular/material/paginator/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatTableHarness} from '@angular/material/table/testing';

// import {ProductCategoryService} from '../../../services/productcategory.service';

let loader: HarnessLoader;
// let loader2: HarnessLoader;

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let openDialog: any;
  // let editDialog: any;

  // jasmine.createSpyObj('ProductService', ['getBySubCatPaged']).and.returnValue(of(
  //   {
  //     results: FAKE_PRODUCTS,
  //     pageSize: 5,
  //     currentPage: 1,
  //     pageCount: 20,
  //     rowCount: 100,
  //     lastRowOnPage: 0,
  //     firstRowOnPage: 0,
      
  //   }));
  
  // const mockedProductService = jasmine.createSpyObj('ProductService', ['getBySubCatPaged']);
  // mockedProductService.getBySubCatPaged.and.returnValue(of(
  //   {
  //     results: FAKE_PRODUCTS,
  //     pageSize: 5,
  //     currentPage: 1,
  //     pageCount: 20,
  //     rowCount: 100,
  //     lastRowOnPage: 0,
  //     firstRowOnPage: 0,
      
  //   }));

  // const mockedProductCategoryService = jasmine.createSpyObj('ProductCategoryService', ['get']);
  // const mockedProductSubCategoryService = jasmine.createSpyObj('ProductSubCategoryService', ['getByCategoryId']);

  // mockedProductCategoryService.get.and.returnValue(of(FAKE_PRODUCTCATEGORY));
  // mockedProductSubCategoryService.getByCategoryId.and.returnValue(of(FAKE_PRODUCTSUBCATEGORY));

  // let fakeProductService: ProductService;
  // let fakeProductCategoryService: ProductCategoryService;
  // let fakeProductSubCategoryService: ProductSubCategoryService;

  beforeEach(async () => {

    // fakeProductService = jasmine.createSpyObj<ProductService>(
    //   'ProductService',
    //   {
    //     getBySubCatPaged: of(
    //       {
    //         results: FAKE_PRODUCTS,
    //         pageSize: 5,
    //         currentPage: 1,
    //         pageCount: 20,
    //         rowCount: 100,
    //         lastRowOnPage: 0,
    //         firstRowOnPage: 0,
            
    //       })
    //   }
    // );

    // fakeProductCategoryService = jasmine.createSpyObj<ProductCategoryService>(
    //   'ProductCategoryService',
    //   {
    //     get: of(FAKE_PRODUCTCATEGORY)
    //   }
    // );

    // fakeProductSubCategoryService = jasmine.createSpyObj<ProductSubCategoryService>(
    //   'ProductSubCategoryService',
    //   {
    //     getByCategoryId: of(FAKE_PRODUCTSUBCATEGORY)
    //   }
    // );

    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatPaginatorModule, FormsModule, BrowserAnimationsModule, MatIconModule, MatDialogModule  ],
      declarations: [ ProductListComponent ],
      providers: [
        // {provide: ProductCategoryService, useValue: mockedProductCategoryService},
        // {provide: ProductSubCategoryService, useValue: mockedProductSubCategoryService},
        // {provide: ProductService, useValue: mockedProductService},
        // {provide: ProductCategoryService, useValue: fakeProductCategoryService},
        // {provide: ProductSubCategoryService, useValue: fakeProductSubCategoryService},
        // {provide: ProductService, useValue: fakeProductService},
      {provide: ProductCategoryService, useClass: ProductCategoryServiceStub},
      {provide: ProductSubCategoryService, useClass: ProductSubCategoryServiceStub},
      {provide: ProductService, useClass: ProductServiceStub},
      // {provide: MatDialog, useClass: MatDialogStub}

      // {provide: MatDialog, useClass: OpenDialogMock}

      // {provide: openEditModal, useClass: OpenEditModalMock},

      // {provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>(['open']).open.and.returnValue(
      //   afterClosed() {
      //     return of('your result');
      //   }
      //   )}


      ]
    })
    .compileComponents();

    // fixture = TestBed.createComponent(ProductListComponent);
    // fixture.detectChanges();
    // loader = TestbedHarnessEnvironment.loader(fixture);
    // component = fixture.componentInstance;

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    openDialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });


  it('should create', () => {
    // spyOn(component, "getCategories").and.returnValue(of{});
    // spyOn(component, "getBySubCatPaged").and.returnValue(of{FAKE_PRODUCTSUBCATEGORY});
    // console.log("should create");
    // jasmine.createSpyObj('ProductService', ['getBySubCatPaged']).and.returnValue(of(
    //   {
    //     results: FAKE_PRODUCTS,
    //     pageSize: 5,
    //     currentPage: 1,
    //     pageCount: 20,
    //     rowCount: 100,
    //     lastRowOnPage: 0,
    //     firstRowOnPage: 0,
        
    //   }));
      
      expect(component).toBeTruthy();
  });

//   // it('should call openDialog', async() => {
//   //   const spy = spyOn(openDialog, 'open').and.callThrough();
//   //   component.openNewModal();
//   //   fixture.detectChanges();

//   //   expect(openDialog.open.calls.count()).toBe(1);

//   //   // const select = await loader.getAllHarnesses(MatSelectHarness);
//   //   // console.log("select.length " + select.length);

//   //   // const popUpHeader = document.getElementsByTagName('h2')[0] as HTMLHeadElement;
//   //   // expect(popUpHeader.innerText).toEqual('Welcome Samuel');

//   // })  


//   // it('should call editDialog and openDialog when clicking on edit icon in table row.', async () => {

//   //   spyOn(component, 'openEditModal').and.callThrough();
//   //   spyOn(openDialog, 'open').and.callThrough();

//   //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
//   //   expect(tableRows.length).toBe(6);

//   //   let row = tableRows[1];

//   //   const tds = row.querySelectorAll('td');
//   //   console.log(tds[6].innerHTML);
//   //   tds[6].querySelector('a').click();
//   //   // expect(component.openEditModal.call.count()).toBe(1);
//   //   expect(openDialog.open.calls.count()).toBe(1);
//   // });

//   // BEGIN PART A

//   it('should have categories list populated ', () => {
//     console.log(1001);
//     expect(component.categories.length).toBe(2);
//   });

//   it('categorySelection should equal first item in categories ', () => {
//     console.log(1001);
//     expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
//   });

//   it('should have productCategoryService list populated ', () => {
//     console.log(1001);
//     expect(component.subcategories.length).toBe(2);
//   });

//   it('should have products list populated ', () => {
//     console.log(1003);
//     expect(component.products.length).toBeGreaterThan(0);
//   });

//   it('should call GetCategories on component Init', () => {
//     console.log(1004);
//     // spyOn(component, 'getCategories').and.callThrough();
//     // component.ngOnInit();
//     // expect(component.getCategories).toHaveBeenCalled();
//     expect(component.categories.length).toBe(2);
//     expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
//     expect(component.subcategories.length).toBe(2);
//     expect(component.products.length).toBeGreaterThan(0);
//     expect(component.subcategorySelection).toBe(component.subcategories[0].productSubCategoryId);
//     // should only be 5 since the default paging is 5
//     expect(component.products.length).toBe(5);

//   });

//   // BEGIN PART B

//   // it('verify that the cat and subcat dropdowns display the mock data FAKE_PRODUCTCATEGORY and FAKE_PRODUCTSUBCATEGORY', () => {
//   //   console.log(1008);
//   //   spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
//   //   component.ngOnInit();
//   //   expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

//   //   fixture.detectChanges();

//   // });


//   // BEGING DROP-DOWNs

//   it('should load all select drop-down control harnesses', async () => {

//     const selects = await loader.getAllHarnesses(MatSelectHarness);
//     console.log("select.length " + selects.length);
//     expect(selects.length).toBe(3);

//     // const tables = await loader.getAllHarnesses(MatTableHarness);
//     // console.log("select.length " + tables.length);
//     // expect(tables.length).toBe(1);

//   });


//   it('should load all select dropdowns values and have 1st value selected for each', async () => {

//     component.ngOnInit();
//     fixture.detectChanges();

//     const select = await loader.getAllHarnesses(MatSelectHarness);

//     console.log("select.length " + select.length);

//     // Category dropdown values
//     await select[0].open();
//     const options1 = await select[0].getOptions();
//     console.log("options1 " + options1.length);
//     expect(options1.length).toBe(2);
//     console.log("Value selected: " + await select[0].getValueText());

//     // test selected value
//     expect(await select[0].getValueText()).toBe(FAKE_PRODUCTCATEGORY[0].name.toString());
//     expect(await select[0].getValueText()).toBe("Building Supplies Lumber");

//     // test all values in Category dropdown
//     for(var i=0; i<=options1.length-1;i++) {
//       console.log(await options1[i].getText());
//       console.log(FAKE_PRODUCTCATEGORY[i].name.toString());
//       expect((await options1[i].getText()).toString()).toBe(FAKE_PRODUCTCATEGORY[i].name.toString());
//     }
    
//     // SubCategory dropdown value
//     await select[1].open();
//     const options2 = await select[1].getOptions();
//     console.log("options2 " + options2.length);
//     expect(options2.length).toBe(2);
//     console.log("Value selected: " + await select[0].getValueText());

//     // test SubCategory selected value
//     expect(await select[1].getValueText()).toBe(FAKE_PRODUCTSUBCATEGORY[0].name.toString());
//     expect(await select[1].getValueText()).toBe("Dimensional Lumber");

//     // test all values in SubCategory dropdown
//     for(var i=0; i<=options2.length-1;i++) {
//       console.log(await options2[i].getText());
//       console.log(component.subcategories[i].name.toString());
//       expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
//       expect((await options2[i].getText()).toString()).toBe(FAKE_PRODUCTSUBCATEGORY[i].name.toString());

//       // testing if option is filtered by Category drop-down selection
//       expect(FAKE_PRODUCTSUBCATEGORY[i].productCategory.productCategoryId.toString()).toBe(FAKE_PRODUCTSUBCATEGORY[0].productCategory.productCategoryId.toString());
//     }

//     // Pagintaor dropdown
//     await select[2].open();
//     const options3 = await select[2].getOptions();
//     console.log("options3 " + options3.length);
//     expect(options3.length).toBe(4);
//     // test Paginator selected value
//     expect(await select[2].getValueText()).toBe(component.pageSizeOptions[0].toString());
//     expect(await select[2].getValueText()).toBe("5");

//     // // test all values in Paginator dropdown
//     // for(var i=0; i<=options3.length-1;i++) {
//     //   console.log(await options3[i].getText());
//     //   console.log(await component.pageSizeOptions[i]);
//     //   expect(options3.length).toBe(4);
//     //   expect((await options3[i].getText()).toString()).toBe(component.pageSizeOptions[i].toString());
//     // }


//   });

//   it('should display filtered results in SubCategory dropdown when selecting "Cement & Masonry" Category dropdown option.', async () => {

//     const select = await loader.getAllHarnesses(MatSelectHarness);

//     console.log("select.length " + select.length);

//     // open "select" Category dropdown
//     await select[0].open();
//     const options1 = await select[0].getOptions();
//     console.log("options1 " + options1.length);

//     // select "Cement & Masonry" option
//     await options1[1].click()

//     // check dropdown value selected
//     var txt = await select[0].getValueText();
//     expect(txt).toBe("Cement & Masonry");

//     // check options.length in Category dropdown
//     await select[1].open();
//     const options2 = await select[1].getOptions();
//     // console.log("options2 " + options2.length);
//     expect(options2.length).toBe(2);

//     // test options text values in Category dropdown
//     for(var i=0; i<=options2.length-1;i++) {
//       // console.log(await options2[i].getText());
//       // console.log(component.subcategories[i].name.toString());
//       expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
//       // testing if option is filtered by Category drop-down selection
//       expect(FAKE_PRODUCTSUBCATEGORY[i].productCategory.productCategoryId.toString()).toBe(FAKE_PRODUCTSUBCATEGORY[0].productCategory.productCategoryId.toString());
//     }
//     // literal string test
//     expect((await options2[0].getText()).toString()).toBe("Concrete Mix");
//     expect((await options2[1].getText()).toString()).toBe("Mortar Mix");

//     // // test table results - should return only 2 rows
//     // let tableRows = fixture.nativeElement.querySelectorAll('tr');
//     // // console.log("tableRows.length: " + tableRows.length);
//     // expect(tableRows.length).toBe(3); // includes the header row of the table
        
//     // // test Product table data against component.products returned
//     // var tableRowCtn = 1;
//     // // console.log("component.firstRowOnPage: " + component.firstRowOnPage);
//     // // console.log("component.lastRowOnPage: " + component.lastRowOnPage);
//     // for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
//     //   let tr = tableRows[tableRowCtn];
//     //   let tds = tr.querySelectorAll('td');
//     //   console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + component.products[i-1].productId.toString())
//     //   expect(tds[0].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productId.toString());
//     //   expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].name.toString());
//     //   expect(tds[2].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productCategory.name.toString());
//     //   expect(tds[3].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productSubCategory.name.toString());
//     //   expect(tds[4].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].unitPrice.toString());
//     //   tableRowCtn++;
//     // }

//     // // literal test of name for first row in table
//     // let tr = tableRows[1];
//     // let tds = tr.querySelectorAll('td');
//     // expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe("80-lb High Strength Concrete Mix");
    

//   });

//   it('should display filtered results in SubCategory dropdown when calling ProductCategoryChangeAction with Category argument = "1014"', async () => {

//     // this is the same as previous test case but calling the Category drop-down callback instead of click button on the drop-down option.
//     component.ProductCategoryChangeAction(1014);
//     fixture.detectChanges();
//     // await fixture.whenStable();

//     const select = await loader.getAllHarnesses(MatSelectHarness);

//     console.log("select.length " + select.length);

//     // open "select" Category dropdown
//     await select[0].open();
//     const options1 = await select[0].getOptions();
//     console.log("options1 " + options1.length);

//     // check dropdown value selected
//     var txt = await select[0].getValueText();
//     // don't check this because ProductCategoryChangeAction doesn't actually set the Category dropdown. The click event in the control does this.
//     // you could set the categorySelection in ProductCategoryChangeAction but you might be forcing a redraw twice...not sure.
//     //  expect(txt).toBe("Cement & Masonry");

//     // check options.length in Category dropdown
//     await select[1].open();
//     const options2 = await select[1].getOptions();
//     // console.log("options2 " + options2.length);
//     expect(options2.length).toBe(2);

//     // test options text values in Category dropdown
//     for(var i=0; i<=options2.length-1;i++) {
//       // console.log(await options2[i].getText());
//       // console.log(component.subcategories[i].name.toString());
//       expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
//       // testing if option is filtered by Category drop-down selection
//       expect(FAKE_PRODUCTSUBCATEGORY[i].productCategory.productCategoryId.toString()).toBe(FAKE_PRODUCTSUBCATEGORY[0].productCategory.productCategoryId.toString());
//     }
//     // literal string test
//     expect((await options2[0].getText()).toString()).toBe("Concrete Mix");
//     expect((await options2[1].getText()).toString()).toBe("Mortar Mix");


//   });

//   // END DROPDOWNs


//   //   // check the default data set displayed in the table
//   //   it('should display first 5 items in mock product list after ngOnInit', () => {
//   //   console.log(1008);
//   //   spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
//   //   component.ngOnInit();
//   //   expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

//   //   fixture.detectChanges();
  
//   //   //-----------------------------------
//   //   // check the default first 5 rows to be displayed based on default categories
//   //   //-----------------------------------
//   //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
//   //     expect(tableRows.length).toBe(6);

//   //     // check Header row
//   //     let headerRow = tableRows[0];
//   //     console.log("headerRow: " + headerRow);
//   //     console.log("tableRows: " + tableRows.length);
//   //     const hdrs = headerRow.querySelectorAll('.mat-sort-header-content');
//   //     expect(hdrs.length).toBe(6);
//   //     expect(hdrs[0].innerHTML).toBe("Id");
//   //     expect(hdrs[1].innerHTML).toBe("Name");
//   //     expect(hdrs[2].innerHTML).toBe("ProductCategory");
//   //     expect(hdrs[3].innerHTML).toBe("ProductSubCategory");
//   //     expect(hdrs[4].innerHTML).toBe("UnitPrice");
//   //     expect(hdrs[5].innerHTML).toBe("Is Deleted");

//   //     headerRow = tableRows[1];
//   //     let tds = headerRow.querySelectorAll('td');
//   //     for (var i=0; i<tds.length; i++) {
//   //       console.log(tds[i].innerHTML)
//   //     }
//   //     expect(tds[0].innerHTML).toBe("1");
//   //     console.log(tds[0].innerHTML)
//   //     console.log(component.products[0].productId.toString());
//   //     console.log(tds[1].innerHTML)
//   //     console.log(component.products[0].name.toString());
//   //     // expect(tds[1].innerHTML).toBe("Whitewood S4S Kiln-dried Lumber");
//   //     // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
//   //     // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
//   //     // expect(tds[4].innerHTML).toBe("14.92");
//   //     expect(tds[0].innerHTML).toBe(component.products[0].productId.toString());
//   //     expect(tds[1].innerHTML).toBe(component.products[0].name.toString());
//   //     expect(tds[2].innerHTML).toBe(component.products[0].productCategory.name.toString());
//   //     expect(tds[3].innerHTML).toBe(component.products[0].productSubCategory.name.toString());
//   //     expect(tds[4].innerHTML).toBe(component.products[0].unitPrice.toString());

//   //     headerRow = tableRows[5];
//   //     tds = headerRow.querySelectorAll('td');
//   //     // expect(tds[0].innerHTML).toBe("5");
//   //     // expect(tds[1].innerHTML).toBe("Spruce Pine Fir S4S Kiln-dried Lumber");
//   //     // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
//   //     // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
//   //     // expect(tds[4].innerHTML).toBe("13.98");
//   //     expect(tds[0].innerHTML).toBe(component.products[4].productId.toString());
//   //     expect(tds[1].innerHTML).toBe(component.products[4].name.toString());
//   //     expect(tds[2].innerHTML).toBe(component.products[4].productCategory.name.toString());
//   //     expect(tds[3].innerHTML).toBe(component.products[4].productSubCategory.name.toString());
//   //     expect(tds[4].innerHTML).toBe(component.products[4].unitPrice.toString());

//   //     // initial PageResult is based on computed values from getBySubCatPaged
//   //     expect(component.pageSize).toBe(5);
//   //     expect(component.currentPage).toBe(0);
//   //     expect(component.pageCount).toBe(4);
//   //     expect(component.rowCount).toBe(17);
//   //     expect(component.firstRowOnPage).toBe(1);
//   //     expect(component.lastRowOnPage).toBe(5);

//   // });

// // START TABLE PAGING

//   // check default paging against the default data set loaded
//   it('should page through 4 page sets 5 items at a time in mock product list', () => {

//     //-----------------------------------
//     // check the default first 5 rows to be displayed based on default category and subcateory selected
//     //-----------------------------------
//     let tableRows = fixture.nativeElement.querySelectorAll('tr');
//     expect(tableRows.length).toBe(6);

//     // check Header row has correct headers
//     let headerRow = tableRows[0];
//     console.log("headerRow: " + headerRow);
//     console.log("tableRows: " + tableRows.length);
//     const hdrs = headerRow.querySelectorAll('.mat-sort-header-content');
//     expect(hdrs.length).toBe(6);
//     expect(hdrs[0].innerHTML).toBe("Id");
//     expect(hdrs[1].innerHTML).toBe("Name");
//     expect(hdrs[2].innerHTML).toBe("ProductCategory");
//     expect(hdrs[3].innerHTML).toBe("ProductSubCategory");
//     expect(hdrs[4].innerHTML).toBe("UnitPrice");
//     expect(hdrs[5].innerHTML).toBe("Is Deleted");

//     tableRows = fixture.nativeElement.querySelectorAll('tr');
//     console.log("tableRows.length: " + tableRows.length);
//     expect(tableRows.length).toBe(6); // includes the header row of the table
        
//     var tableRowCtn = 1;
//     for(var r=0; r<=component.products.length-1;r++) {
//       let tr = tableRows[tableRowCtn];
//       let tds = tr.querySelectorAll('td');
//       expect(tds[0].innerHTML).toBe(component.products[r].productId.toString());
//       expect(tds[1].innerHTML).toBe(component.products[r].name.toString());
//       expect(tds[2].innerHTML).toBe(component.products[r].productCategory.name.toString());
//       expect(tds[3].innerHTML).toBe(component.products[r].productSubCategory.name.toString());
//       expect(tds[4].innerHTML).toBe(component.products[r].unitPrice.toString());
//       tableRowCtn++;
//     }
    
//     //-----------------------------------
//     // get next 5 items from second page (pageIndex+1)
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 0;
//     p.pageSize = 5;
//     p.pageIndex = 1; //paegIndex starts at 0
//     // p.length = 17

//     component.pageChanged(p);

//     fixture.detectChanges();

//     tableRows = fixture.nativeElement.querySelectorAll('tr');
//     console.log("tableRows.length: " + tableRows.length);
//     expect(tableRows.length).toBe(6); // includes the header row of the table
        
//     var tableRowCtn = 1;
//     for(var r=0; r<=component.products.length-1;r++) {
//       let tr = tableRows[tableRowCtn];
//       let tds = tr.querySelectorAll('td');
//       expect(tds[0].innerHTML).toBe(component.products[r].productId.toString());
//       expect(tds[1].innerHTML).toBe(component.products[r].name.toString());
//       expect(tds[2].innerHTML).toBe(component.products[r].productCategory.name.toString());
//       expect(tds[3].innerHTML).toBe(component.products[r].productSubCategory.name.toString());
//       expect(tds[4].innerHTML).toBe(component.products[r].unitPrice.toString());
//       tableRowCtn++;
//     }

//     //-----------------------------------
//     // get next 5 rows from 3rd page
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 1;
//     p.pageSize = 5;
//     p.pageIndex = 2;
//     // p.length = 17

//     component.pageChanged(p);
//     fixture.detectChanges();

//     tableRows = fixture.nativeElement.querySelectorAll('tr');
//     console.log("tableRows.length: " + tableRows.length);
//     expect(tableRows.length).toBe(6);

//     var tableRowCtn = 1;
//     for(var r=0; r<=component.products.length-1;r++) {
//       let tr = tableRows[tableRowCtn];
//       let tds = tr.querySelectorAll('td');
//       expect(tds[0].innerHTML).toBe(component.products[r].productId.toString());
//       expect(tds[1].innerHTML).toBe(component.products[r].name.toString());
//       expect(tds[2].innerHTML).toBe(component.products[r].productCategory.name.toString());
//       expect(tds[3].innerHTML).toBe(component.products[r].productSubCategory.name.toString());
//       expect(tds[4].innerHTML).toBe(component.products[r].unitPrice.toString());
//       tableRowCtn++;
//     }

//     //-----------------------------------
//     // get next 5 rows from 4th page - should only have 2 rows
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 2;
//     p.pageSize = 5;
//     p.pageIndex = 3;

//     component.pageChanged(p);
//     fixture.detectChanges();

//     tableRows = fixture.nativeElement.querySelectorAll('tr');
//     console.log("tableRows.length: " + tableRows.length);

//     // expect the 4th page set to have only two records display...16th and 17th
//     expect(tableRows.length).toBe(3);

//     var tableRowCtn = 1;
//     for(var r=0; r<=component.products.length-1;r++) {
//       let tr = tableRows[tableRowCtn];
//       let tds = tr.querySelectorAll('td');
//       expect(tds[0].innerHTML).toBe(component.products[r].productId.toString());
//       expect(tds[1].innerHTML).toBe(component.products[r].name.toString());
//       expect(tds[2].innerHTML).toBe(component.products[r].productCategory.name.toString());
//       expect(tds[3].innerHTML).toBe(component.products[r].productSubCategory.name.toString());
//       expect(tds[4].innerHTML).toBe(component.products[r].unitPrice.toString());
//       tableRowCtn++;
//     }

//     //-----------------------------------
//     // page back to the 3rd page
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 1;
//     p.pageSize = 5;
//     p.pageIndex = 2;

//     component.pageChanged(p);
//     fixture.detectChanges();

//     tableRows = fixture.nativeElement.querySelectorAll('tr');
//     console.log("tableRows.length: " + tableRows.length);
//     expect(tableRows.length).toBe(6);

//     var tableRowCtn = 1;
//     for(var r=0; r<=component.products.length-1;r++) {
//       let tr = tableRows[tableRowCtn];
//       let tds = tr.querySelectorAll('td');
//       expect(tds[0].innerHTML).toBe(component.products[r].productId.toString());
//       expect(tds[1].innerHTML).toBe(component.products[r].name.toString());
//       expect(tds[2].innerHTML).toBe(component.products[r].productCategory.name.toString());
//       expect(tds[3].innerHTML).toBe(component.products[r].productSubCategory.name.toString());
//       expect(tds[4].innerHTML).toBe(component.products[r].unitPrice.toString());
//       tableRowCtn++;
//     }
//   });

//   it('should display 17 items in mock product list based on pageSize of 25', async () => {

//     //-----------------------------------
//     // set pageSize to 25 - using default mock data loaded.
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 0;
//     p.pageSize = 25;
//     p.pageIndex = 0; //paegIndex starts at 0

//     component.pageChanged(p);
//     fixture.detectChanges();

//     const table = await loader.getHarness(MatTableHarness);

//     var rows = await table.getRows();
//     expect(rows.length).toBe(17);

//     for (var r=0; r<rows.length-1;r++) {
//       const cells = await rows[r].getCells();
//       //expect(cells.length).toBe(5);
//       expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
//       expect(await cells[1].getText()).toBe(component.products[r].name.toString());
//       expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
//       expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
//       expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
//       console.log(await cells[5].getText());
//       console.log(await cells[6].getText());

//     }
//   });

//   it('should display only 2 items after selecting 2nd item in Category drop-down.', async () => {

//     // select Category "Cement & Masonry" from drop-down callback ProductCategoryChangeAction.
//     component.ProductCategoryChangeAction(1014);
//     fixture.detectChanges();
//     await fixture.whenStable();

//     // using initial page set

//     const table = await loader.getHarness(MatTableHarness);

//     var rows = await table.getRows();
//     expect(rows.length).toBe(2);

//     for (var r=0; r<rows.length-1;r++) {
//       const cells = await rows[r].getCells();
//       //expect(cells.length).toBe(5);
//       expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
//       expect(await cells[1].getText()).toBe(component.products[r].name.toString());
//       expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
//       expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
//       expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
//     }
//     let cells = await rows[0].getCells();
//     expect(await cells[1].getText()).toBe("80-lb High Strength Concrete Mix");

//     //-----------------------------------
//     // get next 5 items from second page (pageIndex+1)
//     //-----------------------------------
//     var p = new PageEvent();
//     p.previousPageIndex = 0;
//     p.pageSize = 5;
//     p.pageIndex = 1; //paegIndex starts at 0

//     component.pageChanged(p);
//     fixture.detectChanges();

//     // no further rows found
//     var rows = await table.getRows();
//     expect(rows.length).toBe(0);

//   });

// //   // END TABLE PAGING


// //   // BEGIN TABLE SORTING

  it('should show no sorting using initial data load', (async() => {

    console.log(component.sort.direction);
    expect(component.sort.direction).toBe("");
    const table = await loader.getHarness(MatTableHarness);
    var rows = await table.getRows();
    expect(rows.length).toBe(5);

    // literal test for table 1st and last row
    let cells = await rows[0].getCells();
    expect(await cells[0].getText()).toBe("1");
    expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
    expect(await cells[4].getText()).toBe("14.92");
    cells = await rows[rows.length-1].getCells();
    expect(await cells[0].getText()).toBe("5");
    expect(await cells[1].getText()).toBe("Spruce Pine Fir S4S Kiln-dried Lumber");
    expect(await cells[4].getText()).toBe("13.98");

    // test all table rows and column values against component.products list
    for (var r=0; r<=rows.length-1;r++) {
      const cells = await rows[r].getCells();
      expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
      expect(await cells[1].getText()).toBe(component.products[r].name.toString());
      expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
      expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
      expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());

    }

  }));  

it('should show sorting "asc" after clicking Name column sort 1 time using the initial data load', (async() => {
 
  const buttons = fixture.nativeElement.querySelectorAll('div.mat-sort-header-container');
  console.log("buttons.length " + buttons.length);
  
  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();
  console.log("asc: " + component.sort.direction);

  // must assign the sort to the DataSource in the unit test.
  component.dataSource.sort = component.sort;
  // // after click on the first element, detect the changes to ensure sorting took place
  fixture.detectChanges();
  await fixture.whenStable();
  console.log("asc: " + component.sort.direction);
  
  expect(component.sort.direction).toBe("asc");

  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  // check first row in table
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("2");
  expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("6.75");

  // check last row in table
  cells = await rows[rows.length-1].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");

// Cannot test sorting against the component.product that is loaded into the Table datasource. 
// The datasource is not reloaded into the Table like when we do Paging.

}));  

it('should show sorting "desc" after clicking Name column sort 2 times using initial data load', (async() => {
 
  const buttons = fixture.nativeElement.querySelectorAll('div.mat-sort-header-container');
  
  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();

  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();

  component.dataSource.sort = component.sort;
  fixture.detectChanges();
  await fixture.whenStable();

  console.log(component.sort.direction);
  expect(component.sort.direction).toBe("desc");
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  // check first row in table
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");

  // check last row in table
  cells = await rows[rows.length-1].getCells();
  expect(await cells[0].getText()).toBe("3");
  expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("6.32");
}));  

it('should show sorting "" after clicking name column sort 3 times using initial data load', (async() => {
 
  const buttons = fixture.nativeElement.querySelectorAll('div.mat-sort-header-container');

  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();

  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();

  buttons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();
  
  fixture.detectChanges();
  await fixture.whenStable();
  expect(component.sort.direction).toBe("");

  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  // check first row in table
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");

  // check last row in table
  cells = await rows[rows.length-1].getCells();
  expect(await cells[0].getText()).toBe("5");
  expect(await cells[1].getText()).toBe("Spruce Pine Fir S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("13.98");
}));  

it('should show sort UnitPrice "desc" after clicking sort 2 times and paging next pageset using initial data load', (async() => {
 
  const buttons = fixture.nativeElement.querySelectorAll('div.mat-sort-header-container');
  console.log("buttons.length " + buttons.length);
  
  // expect(buttons.length).toBe(6);
  buttons[4].click();
  fixture.detectChanges();
  await fixture.whenStable();

  buttons[4].click();
  fixture.detectChanges();
  await fixture.whenStable();

  component.dataSource.sort = component.sort;
  fixture.detectChanges();
  await fixture.whenStable();
  
  //-----------------------------------
  // get next 5 items from second page (pageIndex+1)
  //-----------------------------------
  var p = new PageEvent();
  p.previousPageIndex = 0;
  p.pageSize = 5;
  p.pageIndex = 1; //paegIndex starts at 0

  component.pageChanged(p);
  fixture.detectChanges();

  console.log(component.sort.direction);
  expect(component.sort.direction).toBe("desc");

  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  // check first row in table
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("9");
  expect(await cells[1].getText()).toBe("S4S Lumber");
  expect(await cells[4].getText()).toBe("14.55");

  // check last row in table
  cells = await rows[rows.length-1].getCells();
  expect(await cells[0].getText()).toBe("8");
  expect(await cells[1].getText()).toBe("Pine S4S Lumber");
  expect(await cells[4].getText()).toBe("2.98");


}));  

// END SORTING

// BEGIN PAGINATOR LABEL

it('should display sorting label "1 - 5" with initial data load', (async() => {
  
  const paginator = await loader.getHarness(MatPaginatorHarness);
  await paginator.setPageSize(5);
  let lbl = await paginator.getRangeLabel();
  expect(lbl).toBe("1 – 5 of 17");
  
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  for (var r=0; r<=rows.length-1;r++) {
    const cells = await rows[r].getCells();
    expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
    expect(await cells[1].getText()).toBe(component.products[r].name.toString());
    expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
    expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
    expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  }
  // literal test
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");


}));  

it('should display sorting label "6 - 10" after selecting next page', (async() => {
  
  const paginator = await loader.getHarness(MatPaginatorHarness);
  await paginator.setPageSize(5);
  await paginator.goToNextPage();
  fixture.detectChanges();
  await fixture.whenStable();

  expect(component.paginator.pageIndex).toBe(1);

  let lbl = await paginator.getRangeLabel();
  expect(lbl).toBe("6 – 10 of 17");
  
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  for (var r=0; r<=rows.length-1;r++) {
    const cells = await rows[r].getCells();
    expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
    expect(await cells[1].getText()).toBe(component.products[r].name.toString());
    expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
    expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
    expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  }
  // literal test
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("6");
  expect(await cells[1].getText()).toBe("Southern Yellow Pine S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("6.63");


}));  

it('should display sorting label "1 - 5" after selecting next page then previous page', (async() => {
  
  const paginator = await loader.getHarness(MatPaginatorHarness);
  await paginator.setPageSize(5);
  await paginator.goToNextPage();
  fixture.detectChanges();
  await fixture.whenStable();

  await paginator.goToPreviousPage();
  fixture.detectChanges();
  await fixture.whenStable();

  expect(component.paginator.pageIndex).toBe(0);

  let lbl = await paginator.getRangeLabel();
  console.log("lbl " + lbl);
  expect(lbl).toBe("1 – 5 of 17");
  
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(5);

  for (var r=0; r<=rows.length-1;r++) {
    const cells = await rows[r].getCells();
    expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
    expect(await cells[1].getText()).toBe(component.products[r].name.toString());
    expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
    expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
    expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  }
  // literal test
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");


}));  


it('should display sorting label "16 - 17" after selecting next page 3 times', (async() => {
  
  const paginator = await loader.getHarness(MatPaginatorHarness);
  await paginator.setPageSize(5);
  await paginator.goToNextPage();
  fixture.detectChanges();
  await fixture.whenStable();

  await paginator.goToNextPage();
  fixture.detectChanges();
  await fixture.whenStable();

  await paginator.goToNextPage();
  fixture.detectChanges();
  await fixture.whenStable();

  expect(component.paginator.pageIndex).toBe(3);

  let lbl = await paginator.getRangeLabel();
  console.log("lbl " + lbl);
  expect(lbl).toBe("16 – 17 of 17");
  
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(2);

  for (var r=0; r<=rows.length-1;r++) {
    const cells = await rows[r].getCells();
    expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
    expect(await cells[1].getText()).toBe(component.products[r].name.toString());
    expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
    expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
    expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  }
  // literal test
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("16");
  expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("8.98");


}));  


it('should display sorting label "1 - 10" after setting items per page to 10', (async() => {
  
  const paginator = await loader.getHarness(MatPaginatorHarness);
  await paginator.setPageSize(10);

  component.paginator.pageIndex;
  console.log("component.paginator.pageIndex " + component.paginator.pageIndex);

  let lbl = await paginator.getRangeLabel();
  console.log("lbl " + lbl);
  expect(lbl).toBe("1 – 10 of 17");
  
  const table = await loader.getHarness(MatTableHarness);
  var rows = await table.getRows();
  expect(rows.length).toBe(10);

  for (var r=0; r<=rows.length-1;r++) {
    const cells = await rows[r].getCells();
    expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
    expect(await cells[1].getText()).toBe(component.products[r].name.toString());
    expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
    expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
    expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  }
  // literal test
  let cells = await rows[0].getCells();
  expect(await cells[0].getText()).toBe("1");
  expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("14.92");
  cells = await rows[rows.length-1].getCells();
  expect(await cells[0].getText()).toBe("10");
  expect(await cells[1].getText()).toBe("Southern Yellow Pine S4S Kiln-dried Lumber");
  expect(await cells[4].getText()).toBe("6.98");


}));  

// END PAGINATOR SORTING LABEL

// DIALOG BEGIN

  it('should call newDialog', async() => {
    const spy = spyOn(openDialog, 'open').and.callThrough();
    component.openNewModal();
    fixture.detectChanges();

    expect(openDialog.open.calls.count()).toBe(1);
  })  


  it('should call editDialog', async() => {
    const spy = spyOn(openDialog, 'open').and.callThrough();
    component.openEditModal(1);
    fixture.detectChanges();

    expect(openDialog.open.calls.count()).toBe(1);
  })  

  it('should call deleteDialog', async() => {
    const spy = spyOn(openDialog, 'open').and.callThrough();
    //let p = FAKE_PRODUCTS[0];
    component.openDeleteModal(FAKE_PRODUCTS[0]);
    fixture.detectChanges();

    expect(openDialog.open.calls.count()).toBe(1);
  })  

//   // DIALOG END



// it('should display sorting label "16 - 17" after selecting next page', (async() => {
  
//   const paginator = await loader.getHarness(MatPaginatorHarness);
//   await paginator.setPageSize(5);
//   // await paginator.
//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();

//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();

//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();

//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();

//   component.paginator.pageIndex;
//   console.log("component.paginator.pageIndex " + component.paginator.pageIndex);

//   let lbl = await paginator.getRangeLabel();
//   console.log("lbl " + lbl);
//   expect(lbl).toBe("16 – 17 of 17");
  
//   const table = await loader.getHarness(MatTableHarness);
//   var rows = await table.getRows();
//   expect(rows.length).toBe(5);

//   // let cells = await rows[0].getCells();
//   // expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
//   // cells = await rows[rows.length-1].getCells();
//   // expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");

//   for (var r=0; r<=rows.length-1;r++) {
//     const cells = await rows[r].getCells();
//     expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
//     expect(await cells[1].getText()).toBe(component.products[r].name.toString());
//     expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
//     expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
//     expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
//   }
//   // literal test
//   let cells = await rows[0].getCells();
//   expect(await cells[0].getText()).toBe("11");
//   expect(await cells[1].getText()).toBe("Southern Yellow Pine S4S Kiln-dried Lumber");


// }));  

  // it('should trigger ProductCategoryChangeAction and display mock product data for productCategoryId = 1014 and productSubCategoryId = 17 ', () => {

  //   spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

  //   fixture.detectChanges();

  //   component.ProductCategoryChangeAction(1014);

  //   fixture.detectChanges();

  //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //   console.log("tableRows.length: " + tableRows.length);
  //   expect(tableRows.length).toBe(3); // includes the header row of the table

  //   let tr = tableRows[1];
  //   let tds = tr.querySelectorAll('td');
  //   // expect(tds[0].innerHTML).toBe("1");
  //   console.log(tds[0].innerHTML)
  //   console.log(component.products[0].productId.toString());
  //   console.log(tds[1].innerHTML)
  //   console.log(component.products[0].name.toString());

  //   expect(tds[0].innerHTML).toBe("1210");
  //   expect(tds[1].innerHTML).toBe("80-lb High Strength Concrete Mix");
  //   expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
  //   expect(tds[3].innerHTML).toBe("Concrete Mix");
  //   expect(tds[4].innerHTML).toBe("5.6799998");

  //   tr = tableRows[2];
  //   tds = tr.querySelectorAll('td');
  //   // expect(tds[0].innerHTML).toBe("1");
  //   console.log(tds[0].innerHTML)
  //   console.log(component.products[0].productId.toString());
  //   console.log(tds[1].innerHTML)
  //   console.log(component.products[0].name.toString());

  //   expect(tds[0].innerHTML).toBe("1212");
  //   expect(tds[1].innerHTML).toBe("60-lb High Strength Concrete Mix");
  //   expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
  //   expect(tds[3].innerHTML).toBe("Concrete Mix");
  //   expect(tds[4].innerHTML).toBe("4.0300002");

  //   // for(var i=1; i<=tableRows.length-1;i++) {
  //   //   let tr = tableRows[i];
  //   //   let tds = tr.querySelectorAll('td');
  //   //   console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
  //   //   expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
  //   //   expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
  //   //   expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
  //   //   expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
  //   //   expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
  //   // }


  // });

  // it('should trigger ProductCategoryChangeAction and display mock product data for productCategoryId = 1014 and productSubCategoryId = 18 ',  async() => {

  //   // spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
  //   // component.ngOnInit();
  //   // expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

  //   //spyOn(component.productSubCategoryService, 'getByCategoryId').and.callThrough();

  //   // fixture.detectChanges();
  //   // await fixture.whenStable();

    
  //   component.ProductCategoryChangeAction(1014);
  //   fixture.detectChanges();

  //   console.log("force subcategorySelection = 18");
  //   // force subcategorySelection = 18 before calling ProductSubCategoryChangeAction
  //   // because not using select button.
  //   //// NgModel two way binding not working in Unit Test
  //   component.subcategorySelection = 18;
  //   //fixture.detectChanges();

  //   component.ProductSubCategoryChangeAction(18);
  //   fixture.detectChanges();

  //     let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //     console.log("tableRows.length: " + tableRows.length);
  //     expect(tableRows.length).toBe(3); // includes the header row of the table

  //     let tr = tableRows[1];
  //     let tds = tr.querySelectorAll('td');
  //     // expect(tds[0].innerHTML).toBe("1");
  //     console.log(tds[0].innerHTML)
  //     console.log(component.products[0].productId.toString());
  //     console.log(tds[1].innerHTML)
  //     console.log(component.products[0].name.toString());

  //     expect(tds[0].innerHTML).toBe("1214");
  //     expect(tds[1].innerHTML).toBe("60 lb. Mortar Mix");
  //     expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
  //     expect(tds[3].innerHTML).toBe("Mortar Mix");
  //     expect(tds[4].innerHTML).toBe("6.98");

  //     tr = tableRows[2];
  //     tds = tr.querySelectorAll('td');
  //     // expect(tds[0].innerHTML).toBe("1");
  //     console.log(tds[0].innerHTML)
  //     console.log(component.products[0].productId.toString());
  //     console.log(tds[1].innerHTML)
  //     console.log(component.products[0].name.toString());

  //     expect(tds[0].innerHTML).toBe("1215");
  //     expect(tds[1].innerHTML).toBe("80 lbs. Type-S Mortar Mix");
  //     expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
  //     expect(tds[3].innerHTML).toBe("Mortar Mix");
  //     expect(tds[4].innerHTML).toBe("10.27");

  // });


// dropdonw

  // it('should display filtered results in SubCategory dropdown and Products table when selecting "Cement & Masonry" Category dropdown option.', async () => {

  //   component.ngOnInit();
  //   fixture.detectChanges();

  //   const select = await loader.getAllHarnesses(MatSelectHarness);

  //   console.log("select.length " + select.length);

  //   // open "select" Category dropdown
  //   await select[0].open();
  //   const options1 = await select[0].getOptions();
  //   console.log("options1 " + options1.length);

  //   // select "Cement & Masonry" option
  //   await options1[1].click()

  //   // check dropdown value selected
  //   var txt = await select[0].getValueText();
  //   expect(txt).toBe("Cement & Masonry");
  //   // console.log("txt " + txt);

  //   // check options.length in Category dropdown
  //   await select[1].open();
  //   const options2 = await select[1].getOptions();
  //   // console.log("options2 " + options2.length);
  //   expect(options2.length).toBe(2);

  //   // test options text values in Category dropdown
  //   for(var i=0; i<=options2.length-1;i++) {
  //     // console.log(await options2[i].getText());
  //     // console.log(component.subcategories[i].name.toString());
  //     expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
  //   }
  //   expect((await options2[0].getText()).toString()).toBe("Concrete Mix");
  //   expect((await options2[1].getText()).toString()).toBe("Mortar Mix");

  //   // test table results - should return only 2 rows
  //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //   // console.log("tableRows.length: " + tableRows.length);
  //   expect(tableRows.length).toBe(3); // includes the header row of the table
        
  //   // test Product table data against component.products returned
  //   var tableRowCtn = 1;
  //   // console.log("component.firstRowOnPage: " + component.firstRowOnPage);
  //   // console.log("component.lastRowOnPage: " + component.lastRowOnPage);
  //   for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
  //     let tr = tableRows[tableRowCtn];
  //     let tds = tr.querySelectorAll('td');
  //     console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + component.products[i-1].productId.toString())
  //     expect(tds[0].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productId.toString());
  //     expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].name.toString());
  //     expect(tds[2].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productCategory.name.toString());
  //     expect(tds[3].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productSubCategory.name.toString());
  //     expect(tds[4].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].unitPrice.toString());
  //     tableRowCtn++;
  //   }

  //   // literal test of name for first row in table
  //   let tr = tableRows[1];
  //   let tds = tr.querySelectorAll('td');
  //   expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe("80-lb High Strength Concrete Mix");
    

  // });

  // it('should display filtered results in Products table when selecting "Cement & Masonry" Category dropdown option then selecting "Mortar Mix" SubCategory dropdown.', async () => {

  //   component.ngOnInit();
  //   fixture.detectChanges();

  //   const select = await loader.getAllHarnesses(MatSelectHarness);

  //   // console.log("select.length " + select.length);

  //   // open "select" Category dropdown
  //   await select[0].open();
  //   const options1 = await select[0].getOptions();
  //   // console.log("options1 " + options1.length);

  //   // select "Cement & Masonry" option
  //   await options1[1].click()

  //   // check Category dropdown value selected
  //   var txt = await select[0].getValueText();
  //   console.log("txt " + txt);

  //   // open "select" SubCategory dropdown
  //   await select[1].open();
  //   // get options
  //   const options2 = await select[1].getOptions();
  //   // console.log("options2 " + options2.length);
  //   expect(options2.length).toBe(2);
  //   // check second option we want to select
  //   expect((await options2[1].getText()).toString()).toBe("Mortar Mix");
  //   // select "Mortar Mix"
  //   await options2[1].click()

  //   // for(var i=0; i<=options2.length-1;i++) {
  //   //   console.log(await options2[i].getText());
  //   //   console.log(component.subcategories[i].name.toString());
  //   //   expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
  //   // }
  //   // expect((await options2[0].getText()).toString()).toBe("Concrete Mix");

  //   // test table results - should return only 2 rows of Mortar Mix
  //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //   console.log("tableRows.length: " + tableRows.length);
  //   expect(tableRows.length).toBe(3); // includes the header row of the table

  //   // test Product table data against component.products returned
  //   var tableRowCtn = 1;
  //   console.log("component.firstRowOnPage: " + component.firstRowOnPage);
  //   console.log("component.lastRowOnPage: " + component.lastRowOnPage);
  //   for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
  //     let tr = tableRows[tableRowCtn];
  //     let tds = tr.querySelectorAll('td');
  //     console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + component.products[i-1].productId.toString())
  //     expect(tds[0].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productId.toString());
  //     expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].name.toString());
  //     expect(tds[2].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productCategory.name.toString());
  //     expect(tds[3].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productSubCategory.name.toString());
  //     expect(tds[4].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].unitPrice.toString());
  //     tableRowCtn++;
  //   }
  //   // literal test of name for first row in table
  //   let tr = tableRows[1];
  //   let tds = tr.querySelectorAll('td');
  //   expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe("60 lb. Mortar Mix");
    

  // });


});

//////////////////////////////////


  // it('should call GetCategories on component Init', () => {
  //   console.log(1004);
  //   spyOn(component, 'getCategories').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.getCategories).toHaveBeenCalled();
  //   expect(component.categories.length).toBe(2);
  //   expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
  //   expect(component.subcategories.length).toBe(2);
  //   expect(component.products.length).toBeGreaterThan(0);
  //   expect(component.subcategorySelection).toBe(component.subcategories[0].productSubCategoryId);
  //   // should only be 5 since the default paging is 5
  //   expect(component.products.length).toBe(5);

  // });


    // // Header row
    // let headerRow = tableRows[0];
    // console.log("headerRow: " + headerRow);
    // console.log("tableRows: " + tableRows.length);
    // const hdrs = headerRow.querySelectorAll('.mat-sort-header-content');
    // expect(hdrs.length).toBe(6);
    // expect(hdrs[0].innerHTML).toBe("Id");
    // expect(hdrs[1].innerHTML).toBe("Name");
    // expect(hdrs[2].innerHTML).toBe("ProductCategory");
    // expect(hdrs[3].innerHTML).toBe("ProductSubCategory");
    // expect(hdrs[4].innerHTML).toBe("UnitPrice");
    // expect(hdrs[5].innerHTML).toBe("Is Deleted");


    // let tr = tableRows[1];
    // let tds = tr.querySelectorAll('td');
    // console.log("1")
    // console.log("tds.length: " + tds.length)
    // for (var i=0; i<tds.length; i++) {
    //   console.log("innerHTML: " + tds[i].innerHTML)
    // }
    // console.log("check row: " + component.firstRowOnPage);

    // for (var j=0; j<FAKE_PRODUCTS.length;j++) {
    //   console.log("FAKE_PRODUCTS["+j+"]" + FAKE_PRODUCTS[j].productId.toString())
    // }
  
    // fixture.whenStable().then(() => {

      // let tableRows = fixture.nativeElement.querySelectorAll('tr');
      // console.log("tableRows.length: " + tableRows.length);
      // // expect(tableRows.length).toBe(5);
  
  
      // // Header row
      // let headerRow = tableRows[0];
      // console.log("headerRow: " + headerRow);
      // console.log("tableRows: " + tableRows.length);
      // const hdrs = headerRow.querySelectorAll('.mat-sort-header-content');
      // expect(hdrs.length).toBe(6);
      // expect(hdrs[0].innerHTML).toBe("Id");
      // expect(hdrs[1].innerHTML).toBe("Name");
      // expect(hdrs[2].innerHTML).toBe("ProductCategory");
      // expect(hdrs[3].innerHTML).toBe("ProductSubCategory");
      // expect(hdrs[4].innerHTML).toBe("UnitPrice");
      // expect(hdrs[5].innerHTML).toBe("Is Deleted");
  
  
      // let tr = tableRows[1];
      // let tds = tr.querySelectorAll('td');
      // console.log("1")
      // console.log("tds.length: " + tds.length)
      // for (var i=0; i<tds.length; i++) {
      //   console.log("innerHTML: " + tds[i].innerHTML)
      // }
  
      // tr = tableRows[2];
      // tds = tr.querySelectorAll('td');
      // console.log("2")
      // console.log("tds.length: " + tds.length)
      // for (var i=0; i<tds.length; i++) {
      //   console.log("innerHTML: " + tds[i].innerHTML)
      // }
  
    // });

    // expect(component.productService.getBySubCatPaged).toHaveBeenCalledTimes(2);


    // expect(tds[1].innerHTML).toBe("Whitewood S4S Kiln-dried Lumber");
    // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
    // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
    // expect(tds[4].innerHTML).toBe("14.92");
    // expect(tds[0].innerHTML).toBe(component.products[0].productId.toString());
    // expect(tds[1].innerHTML).toBe(component.products[0].name.toString());
    // expect(tds[2].innerHTML).toBe(component.products[0].productCategory.name.toString());
    // expect(tds[3].innerHTML).toBe(component.products[0].productSubCategory.name.toString());
    // expect(tds[4].innerHTML).toBe(component.products[0].unitPrice.toString());

    // headerRow = tableRows[5];
    // tds = headerRow.querySelectorAll('td');
    // expect(tds[0].innerHTML).toBe("5");
    // expect(tds[1].innerHTML).toBe("Spruce Pine Fir S4S Kiln-dried Lumber");
    // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
    // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
    // expect(tds[4].innerHTML).toBe("13.98");
    // expect(tds[0].innerHTML).toBe(component.products[4].productId.toString());
    // expect(tds[1].innerHTML).toBe(component.products[4].name.toString());
    // expect(tds[2].innerHTML).toBe(component.products[4].productCategory.name.toString());
    // expect(tds[3].innerHTML).toBe(component.products[4].productSubCategory.name.toString());
    // expect(tds[4].innerHTML).toBe(component.products[4].unitPrice.toString());

    // // initial PageResult is based on computed values from getBySubCatPaged
    // expect(component.pageSize).toBe(5);
    // expect(component.currentPage).toBe(1);
    // expect(component.pageCount).toBe(4);
    // expect(component.rowCount).toBe(17);
    // expect(component.firstRowOnPage).toBe(1);
    // expect(component.lastRowOnPage).toBe(5);

      // it('PagedResults should display first 5 items in mock product list ', () => {
  //   console.log(1004);
  //   spyOn(component, 'getCategories').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.getCategories).toHaveBeenCalled();
  //   // should only be 5 since the default paging is 5 but could be less if last page.
  //   // should determine value by difference of lastRowOnPage - firstRowOnPage returned in PagedResults
  //   expect(component.products.length).toBe(component.lastRowOnPage-component.firstRowOnPage+1);
  //   // expect(component.products).toEqual(FAKE_PRODUCTS);


  // });


  // it('should call GetCategories on component Init', () => {
  //   console.log(1004);
  //   spyOn(component, 'getCategories').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.getCategories).toHaveBeenCalled();
  //   expect(component.categories.length).toBe(2);
  //   expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
  //   expect(component.subcategories.length).toBe(2);
  //   expect(component.subcategorySelection).toBe(component.subcategories[0].productSubCategoryId);
  //   expect(component.products.length).toBeGreaterThan(0);

  // });

  // // ProductListComponent should call productCategoryService.get on component Init FAILED                                           
  // // Error: <toHaveBeenCalled> : Expected a spy, but got Function.
  // it('should call productCategoryService.get on component Init', () => {
  //   console.log(1004);
  //   spyOn(component.productCategoryService, 'get').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.productCategoryService.get).toHaveBeenCalled();
  //   expect(component.getCategories).toHaveBeenCalled();
  //   expect(component.categories.length).toBe(2);
  //   expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
  //   expect(component.subcategories.length).toBe(2);
  //   expect(component.products.length).toBeGreaterThan(0);
  // });

  // it('should call productService.getBySubCatPaged on component Init', () => {
  //   console.log(1004);
  //   spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.productService.getBySubCatPaged).toHaveBeenCalled();
  // });

      // await select[0].open();
    // const options1 = await select[0].getOptions();
    // console.log("options1 " + options1.length);

    // for(var i=0; i<=options1.length-1;i++) {
    //   // console.log(await options1[0].getText());
    //   // console.log(FAKE_PRODUCTCATEGORY[i].name.toString());
    //   expect((await options1[i].getText()).toString()).toBe(FAKE_PRODUCTCATEGORY[i].name.toString());
    // }

    
    // expect(options1.length).toBe(2);
    // await select[1].open();
    // const options2 = await select[1].getOptions();
    // console.log("options2 " + options2.length);

    // for(var i=0; i<=options2.length-1;i++) {
    //   // console.log(await options2[i].getText());
    //   // console.log(component.subcategories[i].name.toString());
    //   expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
    // }

// it('should display sorting label "11 - 15" after selecting next page', (async() => {
  
//   const paginator = await loader.getHarness(MatPaginatorHarness);
//   await paginator.setPageSize(5);
//   // await paginator.

//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();

//   await paginator.goToNextPage();
//   fixture.detectChanges();
//   await fixture.whenStable();
  
//   component.paginator.pageIndex;
//   console.log("component.paginator.pageIndex " + component.paginator.pageIndex);

//   let lbl = await paginator.getRangeLabel();
//   console.log("lbl " + lbl);
//   expect(lbl).toBe("11 – 15 of 17");
  
//   const table = await loader.getHarness(MatTableHarness);
//   var rows = await table.getRows();
//   expect(rows.length).toBe(5);

//   // let cells = await rows[0].getCells();
//   // expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");
//   // cells = await rows[rows.length-1].getCells();
//   // expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");

//   for (var r=0; r<=rows.length-1;r++) {
//     const cells = await rows[r].getCells();
//     expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
//     expect(await cells[1].getText()).toBe(component.products[r].name.toString());
//     expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
//     expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
//     expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
//   }
//   // literal test
//   let cells = await rows[0].getCells();
//   expect(await cells[0].getText()).toBe("11");
//   expect(await cells[1].getText()).toBe("Southern Yellow Pine S4S Kiln-dried Lumber");
//   expect(await cells[4].getText()).toBe("8.93");


// }));  

// it('should show sorting "asc" after clicking name column sort 1 time and paging next pageset the back to 1st pageset using default mock data loaded', (async() => {
 
//   const buttons = fixture.nativeElement.querySelectorAll('div.mat-sort-header-container');
//   console.log("buttons.length " + buttons.length);
  
//   // expect(buttons.length).toBe(6);
//   buttons[1].click();
//   fixture.detectChanges();
//   await fixture.whenStable();
//   component.dataSource.sort = component.sort;
//   fixture.detectChanges();
//   await fixture.whenStable();
//   //-----------------------------------
//   // get next 5 items from second page (pageIndex+1)
//   //-----------------------------------
//   var p = new PageEvent();
//   p.previousPageIndex = 0;
//   p.pageSize = 5;
//   p.pageIndex = 1; //paegIndex starts at 0

//   component.pageChanged(p);
//   fixture.detectChanges();

//     //-----------------------------------
//   // get next 5 items from second page (pageIndex+1)
//   //-----------------------------------
//   var p = new PageEvent();
//   p.previousPageIndex = 0;
//   p.pageSize = 5;
//   p.pageIndex = 0; //paegIndex starts at 0

//   component.pageChanged(p);
//   fixture.detectChanges();

//   // // // after click on the first element, detect the changes to ensure sorting took place
//   // fixture.detectChanges();
//   // await fixture.whenStable();

//   // fixture.detectChanges();
//   // await fixture.whenStable();

//   console.log(component.sort.direction);
//   expect(component.sort.direction).toBe("asc");
//   // console.log(component.sort.direction);
//   // console.log(component.sort.getNextSortDirection);
//   const table = await loader.getHarness(MatTableHarness);
//   var rows = await table.getRows();
//   expect(rows.length).toBe(5);

//   let cells = await rows[0].getCells();
//   expect(await cells[0].getText()).toBe("2");
//   expect(await cells[1].getText()).toBe("Fir S4S Kiln-dried Lumber");
//   cells = await rows[rows.length-1].getCells();
//   expect(await cells[0].getText()).toBe("1");
//   expect(await cells[1].getText()).toBe("Whitewood S4S Kiln-dried Lumber");

//   for (var r=0; r<=rows.length-1;r++) {
//     const cells = await rows[r].getCells();
//     //expect(cells.length).toBe(5);
//     console.log(await cells[0].getText());
//     console.log(await cells[1].getText());
//     console.log(await cells[2].getText());
//     console.log(await cells[3].getText());
//     console.log(await cells[4].getText());

//   }

// }));  


  // it('should sort product name column 3 different ways: ascending, descending & default sort..', async () => {

  //   // select Category "Cement & Masonry" from drop-down callback ProductCategoryChangeAction.
  //   component.ProductCategoryChangeAction(1014);
  //   fixture.detectChanges();
  //   await fixture.whenStable();

  //   // using initial page set

  //   const table = await loader.getHarness(MatTableHarness);


  //   // var rows = await table.getHeaderRows();
  //   // table.
  //   // rows[0].``
  //   // expect(rows.length).toBe(2);

  //   var rows = await table.getRows();
  //   expect(rows.length).toBe(2);

  //   for (var r=0; r<rows.length-1;r++) {
  //     const cells = await rows[r].getCells();
  //     //expect(cells.length).toBe(5);
  //     expect(await cells[0].getText()).toBe(component.products[r].productId.toString());
  //     expect(await cells[1].getText()).toBe(component.products[r].name.toString());
  //     expect(await cells[2].getText()).toBe(component.products[r].productCategory.name.toString());
  //     expect(await cells[3].getText()).toBe(component.products[r].productSubCategory.name.toString());
  //     expect(await cells[4].getText()).toBe(component.products[r].unitPrice.toString());
  //   }
  //   let cells = await rows[0].getCells();
  //   expect(await cells[1].getText()).toBe("80-lb High Strength Concrete Mix");

  //   //-----------------------------------
  //   // get next 5 items from second page (pageIndex+1)
  //   //-----------------------------------
  //   var p = new PageEvent();
  //   p.previousPageIndex = 0;
  //   p.pageSize = 5;
  //   p.pageIndex = 1; //paegIndex starts at 0

  //   component.pageChanged(p);
  //   fixture.detectChanges();

  //   // no further rows found
  //   var rows = await table.getRows();
  //   expect(rows.length).toBe(0);

  // });

  // // check paging set to 25 against the default data set loaded
  // it('should display 17 items in mock product list based on pageSize of 25', () => {

  //   console.log(1008);
  //   spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

  //   fixture.detectChanges();

  //   //-----------------------------------
  //   // get next 25 items from second page (pageIndex+1)
  //   //-----------------------------------
  //   var p = new PageEvent();
  //   p.previousPageIndex = 0;
  //   p.pageSize = 25;
  //   p.pageIndex = 0; //paegIndex starts at 0

  //   component.pageChanged(p);

  //   fixture.detectChanges();

  //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
  //   console.log("tableRows.length: " + tableRows.length);
  //   expect(tableRows.length).toBe(18); // includes the header row of the table
        
  //   var tableRowCtn = 1;
  //   console.log("component.firstRowOnPage: " + component.firstRowOnPage);
  //   console.log("component.lastRowOnPage: " + component.lastRowOnPage);
  //   for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
  //     let tr = tableRows[tableRowCtn];
  //     let tds = tr.querySelectorAll('td');
  //     console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
  //     expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
  //     expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
  //     expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
  //     expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
  //     expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
  //     tableRowCtn++;
  //   }

  // });
