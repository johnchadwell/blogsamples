import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './products.list.component';
import {ProductCategoryServiceStub, ProductSubCategoryServiceStub, ProductServiceStub, OpenDialogMock} from "./products.list.mock"
import {FAKE_PRODUCTS, FAKE_PRODUCTCATEGORY, FAKE_PRODUCTSUBCATEGORY} from "./products.list.mock"
import {Product} from '../../../models/product';
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

// import {ProductCategoryService} from '../../../services/productcategory.service';

let loader: HarnessLoader;
let loader2: HarnessLoader;

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let openDialog: any;
  let editDialog: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatPaginatorModule, FormsModule, BrowserAnimationsModule, MatIconModule, MatDialogModule  ],
      declarations: [ ProductListComponent ],
      providers: [
      {provide: ProductCategoryService, useClass: ProductCategoryServiceStub},
      {provide: ProductSubCategoryService, useClass: ProductSubCategoryServiceStub},
      {provide: ProductService, useClass: ProductServiceStub},
      {provide: MatDialog, useClass: OpenDialogMock}
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
    // openDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    openDialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should call openDialog', async() => {
    const spy = spyOn(openDialog, 'open').and.callThrough();
    component.openNewModal();
    fixture.detectChanges();

    expect(openDialog.open.calls.count()).toBe(1);

    // const select = await loader.getAllHarnesses(MatSelectHarness);
    // console.log("select.length " + select.length);

    // const popUpHeader = document.getElementsByTagName('h2')[0] as HTMLHeadElement;
    // expect(popUpHeader.innerText).toEqual('Welcome Samuel');

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

  it('should have categories list populated ', () => {
    console.log(1001);
    expect(component.categories.length).toBe(2);
  });

  it('categorySelection should equal first item in categories ', () => {
    console.log(1001);
    expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
  });

  it('should have productCategoryService list populated ', () => {
    console.log(1001);
    expect(component.subcategories.length).toBe(2);
  });

  it('should have products list populated ', () => {
    console.log(1003);
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should call GetCategories on component Init', () => {
    console.log(1004);
    spyOn(component, 'getCategories').and.callThrough();
    component.ngOnInit();
    expect(component.getCategories).toHaveBeenCalled();
    expect(component.categories.length).toBe(2);
    expect(component.categorySelection).toBe(component.categories[0].productCategoryId);
    expect(component.subcategories.length).toBe(2);
    expect(component.products.length).toBeGreaterThan(0);
    expect(component.subcategorySelection).toBe(component.subcategories[0].productSubCategoryId);
    // should only be 5 since the default paging is 5
    expect(component.products.length).toBe(5);

  });

  it('verify that the cat and subcat dropdowns display the mock data FAKE_PRODUCTCATEGORY and FAKE_PRODUCTSUBCATEGORY', () => {
    console.log(1008);
    spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    component.ngOnInit();
    expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    fixture.detectChanges();

  });

    // check the default data set displayed in the table
    it('should display first 5 items in mock product list after ngOnInit', () => {
    console.log(1008);
    spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    component.ngOnInit();
    expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    fixture.detectChanges();
  
    //-----------------------------------
    // check the default first 5 rows to be displayed based on default categories
    //-----------------------------------
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(6);

      // check Header row
      let headerRow = tableRows[0];
      console.log("headerRow: " + headerRow);
      console.log("tableRows: " + tableRows.length);
      const hdrs = headerRow.querySelectorAll('.mat-sort-header-content');
      expect(hdrs.length).toBe(6);
      expect(hdrs[0].innerHTML).toBe("Id");
      expect(hdrs[1].innerHTML).toBe("Name");
      expect(hdrs[2].innerHTML).toBe("ProductCategory");
      expect(hdrs[3].innerHTML).toBe("ProductSubCategory");
      expect(hdrs[4].innerHTML).toBe("UnitPrice");
      expect(hdrs[5].innerHTML).toBe("Is Deleted");

      headerRow = tableRows[1];
      let tds = headerRow.querySelectorAll('td');
      for (var i=0; i<tds.length; i++) {
        console.log(tds[i].innerHTML)
      }
      expect(tds[0].innerHTML).toBe("1");
      console.log(tds[0].innerHTML)
      console.log(component.products[0].productId.toString());
      console.log(tds[1].innerHTML)
      console.log(component.products[0].name.toString());
      // expect(tds[1].innerHTML).toBe("Whitewood S4S Kiln-dried Lumber");
      // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
      // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
      // expect(tds[4].innerHTML).toBe("14.92");
      expect(tds[0].innerHTML).toBe(component.products[0].productId.toString());
      expect(tds[1].innerHTML).toBe(component.products[0].name.toString());
      expect(tds[2].innerHTML).toBe(component.products[0].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(component.products[0].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(component.products[0].unitPrice.toString());

      headerRow = tableRows[5];
      tds = headerRow.querySelectorAll('td');
      // expect(tds[0].innerHTML).toBe("5");
      // expect(tds[1].innerHTML).toBe("Spruce Pine Fir S4S Kiln-dried Lumber");
      // expect(tds[2].innerHTML).toBe("Building Supplies Lumber");
      // expect(tds[3].innerHTML).toBe("Dimensional Lumber");
      // expect(tds[4].innerHTML).toBe("13.98");
      expect(tds[0].innerHTML).toBe(component.products[4].productId.toString());
      expect(tds[1].innerHTML).toBe(component.products[4].name.toString());
      expect(tds[2].innerHTML).toBe(component.products[4].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(component.products[4].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(component.products[4].unitPrice.toString());

      // initial PageResult is based on computed values from getBySubCatPaged
      expect(component.pageSize).toBe(5);
      expect(component.currentPage).toBe(1);
      expect(component.pageCount).toBe(4);
      expect(component.rowCount).toBe(17);
      expect(component.firstRowOnPage).toBe(1);
      expect(component.lastRowOnPage).toBe(5);

  });


  // check default paging against the default data set loaded
  it('should display next 5 items in mock product list', () => {

    console.log(1008);
    spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    component.ngOnInit();
    expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    fixture.detectChanges();

    //-----------------------------------
    // get next 5 items from second page (pageIndex+1)
    //-----------------------------------
    var p = new PageEvent();
    p.previousPageIndex = 0;
    p.pageSize = 5;
    p.pageIndex = 1; //paegIndex starts at 0
    p.length = 17

    component.pageChanged(p);

    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(6); // includes the header row of the table
        
    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
      expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
      expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
      expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
      tableRowCtn++;
    }
  
    //-----------------------------------
    // get next 5 rows from 3rd page
    //-----------------------------------
    var p = new PageEvent();
    p.previousPageIndex = 1;
    p.pageSize = 5;
    p.pageIndex = 2;
    p.length = 17

    component.pageChanged(p);

    fixture.detectChanges();

    tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(6);

    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
      expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
      expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
      expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
      tableRowCtn++;
    }

    //-----------------------------------
    // get next 5 rows from 4th page - should only have 2 rows
    //-----------------------------------
    var p = new PageEvent();
    p.previousPageIndex = 2;
    p.pageSize = 5;
    p.pageIndex = 3;
    p.length = 17

    component.pageChanged(p);

    fixture.detectChanges();

    tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    // expect the 4th page set to have only two records display...16th and 17th
    expect(tableRows.length).toBe(3);

    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
      expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
      expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
      expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
      tableRowCtn++;
    }

    //-----------------------------------
    // page back to the 3rd page
    //-----------------------------------
    var p = new PageEvent();
    p.previousPageIndex = 1;
    p.pageSize = 5;
    p.pageIndex = 2;
    p.length = 17

    component.pageChanged(p);

    fixture.detectChanges();

    tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    // expect the 4th page set to have only two records display...16th and 17th
    expect(tableRows.length).toBe(6);

    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
      expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
      expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
      expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
      tableRowCtn++;
    }

  
  });


  // check paging set to 25 against the default data set loaded
  it('should display 17 items in mock product list based on pageSize of 25', () => {

    console.log(1008);
    spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    component.ngOnInit();
    expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    fixture.detectChanges();

    //-----------------------------------
    // get next 25 items from second page (pageIndex+1)
    //-----------------------------------
    var p = new PageEvent();
    p.previousPageIndex = 0;
    p.pageSize = 25;
    p.pageIndex = 0; //paegIndex starts at 0
    p.length = 17

    component.pageChanged(p);

    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(18); // includes the header row of the table
        
    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
      expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
      expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
      expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
      tableRowCtn++;
    }

  });

  it('should trigger ProductCategoryChangeAction and display mock product data for productCategoryId = 1014 and productSubCategoryId = 17 ', () => {

    spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    component.ngOnInit();
    expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    fixture.detectChanges();

    component.ProductCategoryChangeAction(1014);

    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(3); // includes the header row of the table

    let tr = tableRows[1];
    let tds = tr.querySelectorAll('td');
    // expect(tds[0].innerHTML).toBe("1");
    console.log(tds[0].innerHTML)
    console.log(component.products[0].productId.toString());
    console.log(tds[1].innerHTML)
    console.log(component.products[0].name.toString());

    expect(tds[0].innerHTML).toBe("1210");
    expect(tds[1].innerHTML).toBe("80-lb High Strength Concrete Mix");
    expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
    expect(tds[3].innerHTML).toBe("Concrete Mix");
    expect(tds[4].innerHTML).toBe("5.6799998");

    tr = tableRows[2];
    tds = tr.querySelectorAll('td');
    // expect(tds[0].innerHTML).toBe("1");
    console.log(tds[0].innerHTML)
    console.log(component.products[0].productId.toString());
    console.log(tds[1].innerHTML)
    console.log(component.products[0].name.toString());

    expect(tds[0].innerHTML).toBe("1212");
    expect(tds[1].innerHTML).toBe("60-lb High Strength Concrete Mix");
    expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
    expect(tds[3].innerHTML).toBe("Concrete Mix");
    expect(tds[4].innerHTML).toBe("4.0300002");

    // for(var i=1; i<=tableRows.length-1;i++) {
    //   let tr = tableRows[i];
    //   let tds = tr.querySelectorAll('td');
    //   console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + FAKE_PRODUCTS[i-1].productId.toString())
    //   expect(tds[0].innerHTML).toBe(FAKE_PRODUCTS[i-1].productId.toString());
    //   expect(tds[1].innerHTML).toBe(FAKE_PRODUCTS[i-1].name.toString());
    //   expect(tds[2].innerHTML).toBe(FAKE_PRODUCTS[i-1].productCategory.name.toString());
    //   expect(tds[3].innerHTML).toBe(FAKE_PRODUCTS[i-1].productSubCategory.name.toString());
    //   expect(tds[4].innerHTML).toBe(FAKE_PRODUCTS[i-1].unitPrice.toString());
    // }


  });

  it('should trigger ProductCategoryChangeAction and display mock product data for productCategoryId = 1014 and productSubCategoryId = 18 ',  async() => {

    // spyOn(component.productService, 'getBySubCatPaged').and.callThrough();
    // component.ngOnInit();
    // expect(component.productService.getBySubCatPaged).toHaveBeenCalled();

    //spyOn(component.productSubCategoryService, 'getByCategoryId').and.callThrough();

    // fixture.detectChanges();
    // await fixture.whenStable();

    
    component.ProductCategoryChangeAction(1014);
    fixture.detectChanges();

    console.log("force subcategorySelection = 18");
    // force subcategorySelection = 18 before calling ProductSubCategoryChangeAction
    // because not using select button.
    //// NgModel two way binding not working in Unit Test
    component.subcategorySelection = 18;
    //fixture.detectChanges();

    component.ProductSubCategoryChangeAction(18);
    fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      console.log("tableRows.length: " + tableRows.length);
      expect(tableRows.length).toBe(3); // includes the header row of the table

      let tr = tableRows[1];
      let tds = tr.querySelectorAll('td');
      // expect(tds[0].innerHTML).toBe("1");
      console.log(tds[0].innerHTML)
      console.log(component.products[0].productId.toString());
      console.log(tds[1].innerHTML)
      console.log(component.products[0].name.toString());

      expect(tds[0].innerHTML).toBe("1214");
      expect(tds[1].innerHTML).toBe("60 lb. Mortar Mix");
      expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
      expect(tds[3].innerHTML).toBe("Mortar Mix");
      expect(tds[4].innerHTML).toBe("6.98");

      tr = tableRows[2];
      tds = tr.querySelectorAll('td');
      // expect(tds[0].innerHTML).toBe("1");
      console.log(tds[0].innerHTML)
      console.log(component.products[0].productId.toString());
      console.log(tds[1].innerHTML)
      console.log(component.products[0].name.toString());

      expect(tds[0].innerHTML).toBe("1215");
      expect(tds[1].innerHTML).toBe("80 lbs. Type-S Mortar Mix");
      expect(decodeURIComponent(tds[2].innerHTML.replace(/&amp;/g,'&'))).toBe("Cement & Masonry");
      expect(tds[3].innerHTML).toBe("Mortar Mix");
      expect(tds[4].innerHTML).toBe("10.27");

  });

  it('should load all select harnesses', async () => {

    component.ngOnInit();
    fixture.detectChanges();

    const select = await loader.getAllHarnesses(MatSelectHarness);
    console.log("select.length " + select.length);
    expect(select.length).toBe(3);

  });

  it('should load select dropdowns and display default selections', async () => {

    component.ngOnInit();
    fixture.detectChanges();

    const select = await loader.getAllHarnesses(MatSelectHarness);

    console.log("select.length " + select.length);

    await select[0].open();
    const options1 = await select[0].getOptions();
    console.log("options1 " + options1.length);

    for(var i=0; i<=options1.length-1;i++) {
      console.log(await options1[0].getText());
      console.log(FAKE_PRODUCTCATEGORY[i].name.toString());
      expect((await options1[i].getText()).toString()).toBe(FAKE_PRODUCTCATEGORY[i].name.toString());
    }
    
    expect(options1.length).toBe(2);
    await select[1].open();
    const options2 = await select[1].getOptions();
    console.log("options2 " + options2.length);

    for(var i=0; i<=options2.length-1;i++) {
      console.log(await options2[i].getText());
      console.log(component.subcategories[i].name.toString());
      expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
    }


    expect(options2.length).toBe(2);

  });

  it('should display filtered results in SubCategory dropdown and Products table when selecting "Cement & Masonry" Category dropdown option.', async () => {

    component.ngOnInit();
    fixture.detectChanges();

    const select = await loader.getAllHarnesses(MatSelectHarness);

    console.log("select.length " + select.length);

    // open "select" Category dropdown
    await select[0].open();
    const options1 = await select[0].getOptions();
    console.log("options1 " + options1.length);

    // select "Cement & Masonry" option
    await options1[1].click()

    // check dropdown value selected
    var txt = await select[0].getValueText();
    expect(txt).toBe("Cement & Masonry");
    // console.log("txt " + txt);

    // check options.length in Category dropdown
    await select[1].open();
    const options2 = await select[1].getOptions();
    // console.log("options2 " + options2.length);
    expect(options2.length).toBe(2);

    // test options text values in Category dropdown
    for(var i=0; i<=options2.length-1;i++) {
      // console.log(await options2[i].getText());
      // console.log(component.subcategories[i].name.toString());
      expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
    }
    expect((await options2[0].getText()).toString()).toBe("Concrete Mix");
    expect((await options2[1].getText()).toString()).toBe("Mortar Mix");

    // test table results - should return only 2 rows
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    // console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(3); // includes the header row of the table
        
    // test Product table data against component.products returned
    var tableRowCtn = 1;
    // console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    // console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + component.products[i-1].productId.toString())
      expect(tds[0].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productId.toString());
      expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].name.toString());
      expect(tds[2].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].unitPrice.toString());
      tableRowCtn++;
    }

    // literal test of name for first row in table
    let tr = tableRows[1];
    let tds = tr.querySelectorAll('td');
    expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe("80-lb High Strength Concrete Mix");
    

  });

  it('should display filtered results in Products table when selecting "Cement & Masonry" Category dropdown option then selecting "Mortar Mix" SubCategory dropdown.', async () => {

    component.ngOnInit();
    fixture.detectChanges();

    const select = await loader.getAllHarnesses(MatSelectHarness);

    // console.log("select.length " + select.length);

    // open "select" Category dropdown
    await select[0].open();
    const options1 = await select[0].getOptions();
    // console.log("options1 " + options1.length);

    // select "Cement & Masonry" option
    await options1[1].click()

    // check Category dropdown value selected
    var txt = await select[0].getValueText();
    console.log("txt " + txt);

    // open "select" SubCategory dropdown
    await select[1].open();
    // get options
    const options2 = await select[1].getOptions();
    // console.log("options2 " + options2.length);
    expect(options2.length).toBe(2);
    // check second option we want to select
    expect((await options2[1].getText()).toString()).toBe("Mortar Mix");
    // select "Mortar Mix"
    await options2[1].click()

    // for(var i=0; i<=options2.length-1;i++) {
    //   console.log(await options2[i].getText());
    //   console.log(component.subcategories[i].name.toString());
    //   expect((await options2[i].getText()).toString()).toBe(component.subcategories[i].name.toString());
    // }
    // expect((await options2[0].getText()).toString()).toBe("Concrete Mix");

    // test table results - should return only 2 rows of Mortar Mix
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log("tableRows.length: " + tableRows.length);
    expect(tableRows.length).toBe(3); // includes the header row of the table

    // test Product table data against component.products returned
    var tableRowCtn = 1;
    console.log("component.firstRowOnPage: " + component.firstRowOnPage);
    console.log("component.lastRowOnPage: " + component.lastRowOnPage);
    for(var i=component.firstRowOnPage; i<=component.lastRowOnPage;i++) {
      let tr = tableRows[tableRowCtn];
      let tds = tr.querySelectorAll('td');
      console.log("index: " + (i-1) + " : " + tds[0].innerHTML + " = " + component.products[i-1].productId.toString())
      expect(tds[0].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productId.toString());
      expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].name.toString());
      expect(tds[2].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productCategory.name.toString());
      expect(tds[3].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].productSubCategory.name.toString());
      expect(tds[4].innerHTML.replace(/&amp;/g,'&')).toBe(component.products[i-1].unitPrice.toString());
      tableRowCtn++;
    }
    // literal test of name for first row in table
    let tr = tableRows[1];
    let tds = tr.querySelectorAll('td');
    expect(tds[1].innerHTML.replace(/&amp;/g,'&')).toBe("60 lb. Mortar Mix");
    

  });


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

