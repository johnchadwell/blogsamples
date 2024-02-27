// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products.list',
//   templateUrl: './products.list.component.html',
//   styleUrls: ['./products.list.component.scss']
// })
// export class ProductsListComponent {

// }


import { Component, OnInit, Inject, AfterViewInit, ViewChild   } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductCategory } from '../../../models/productcategory';
import { ProductSubCategory } from '../../../models/productsubcategory';
import { ProductSelection } from '../../../models/productselection';
import {ProductService} from '../../../services/product.service';
import {ProductCategoryService} from '../../../services/productcategory.service';
import {ProductSubCategoryService} from '../../../services/productsubcategory.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductNewComponent } from '../products.new/products.new.component';
import { ProductEditComponent } from '../products.edit/products.edit.component';
import { ProductDeleteComponent } from '../products.delete/products.delete.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import{UppercaseFirstLetters} from '../../../utility/utility'
import {SelectionModel} from '@angular/cdk/collections';


// import { SubcategoriesEditComponent } from '../../subcategoriessubcategories.edit/subcategories.edit.component';
// import { SubcategoriesDeleteComponent } from '../../subcategoriessubcategories.delete/subcategories.delete.component';


// type CategoriesType = {
//   id?: string
//   name?: string,
// };

@Component({
  selector: 'app-products.list',
  templateUrl: './products.list.component.html',
  styleUrls: ['./products.list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  categorySelection;
  subcategorySelection;
  products: Product[];
  //public products = new MatTableDataSource<Product>();
  categories: ProductCategory[];
  subcategories: ProductSubCategory[];
  displayedColumns: string[] = ['productId', 'name', 'productCategory.name', 'productSubCategory.name',  'unitPrice', 'isDeleted' ,'actions'];
 
  // @ViewChild(MatSort) sort: MatSort;
  // sortBy:any
  public dataSource: MatTableDataSource<Product>;
  selection = new SelectionModel<Product>(false, []);
  
  currentPage = 0;
  pageSize = 5;
  pageCount = 1;
  rowCount = 0;
  lastRowOnPage = 0;
  firstRowOnPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];  

  constructor(
    public productService: ProductService,
    public productCategoryService: ProductCategoryService,
    public productSubCategoryService: ProductSubCategoryService,
    public dialog: MatDialog
  ) { 

  }

  @ViewChild('paginator') paginator: MatPaginator;
  // @ViewChild('paginator') paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype)
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log("[ngOnInit]");
      this.getCategories();
      //this.dataSource.sort = this.sort;

      //// this.paginator.length = this.rowCount;
      //// this.paginator.pageIndex = this.currentPage;
      //// this.paginator.pageSize = this.pageSize;
      //this.getProducstPaged2(1,5);

  }
  ngAfterViewInit(): void {
    console.log("[ngAfterViewInit]");
    this.paginator.pageIndex = 0;
    // this.paginator.length = this.rowCount;
    // this.paginator.pageIndex = this.currentPage;
    // this.paginator.pageSize = this.pageSize;

  }
  // // sorts products for a given subcategory
  // getBySubCatSortAndPage(subcat: number, column: string, direction: string, page: number, itemsPerPage: number) {
  //   console.log("[getBySubCatSortAndPage]");
  //   this.productService.getBySubCatSortAndPage(subcat, column, direction, page, itemsPerPage).subscribe((data) => {
  //     this.products = data.results;
  //     this.pageSize = data.pageSize;
  //     this.currentPage = data.currentPage;
  //     this.pageCount =  data.pageCount;
  //     this.rowCount = data.rowCount;
  //     this.lastRowOnPage = data.lastRowOnPage;
  //     this.firstRowOnPage = data.firstRowOnPage;

  //     this.paginator.length = this.rowCount;
  //     console.log("getBySubCatSortAndPage.currentPage: " + this.currentPage);
  //     this.paginator.pageIndex = this.currentPage;
  //     this.paginator.pageSize = this.pageSize;
  //   });

  // }

  // getProducstPaged2(page: number, itemsPerPage: number) {
  //   console.log("[getProducstPaged2]");
  //   this.productService.getProductsPaged2(page, itemsPerPage).subscribe((data) => {
  //     this.products = data.results;
  //     this.pageSize = data.pageSize;
  //     this.currentPage = data.currentPage;
  //     this.pageCount =  data.pageCount;
  //     this.rowCount = data.rowCount;
  //     this.lastRowOnPage = data.lastRowOnPage;
  //     this.firstRowOnPage = data.firstRowOnPage;

  //     this.paginator.length = this.rowCount;
  //     this.paginator.pageIndex = this.currentPage;
  //     this.paginator.pageSize = this.pageSize;
  //   });
  // }

  getBySubCatPaged(subcat: number, page: number, itemsPerPage: number, resetpage: boolean) {
    console.log("[getBySubCatPaged]");
    console.log("getBySubCatPaged.page: " + page);
    console.log("getBySubCatPaged.itemsPerPage: " + itemsPerPage);
    this.productService.getBySubCatPaged(subcat, page+1, itemsPerPage).subscribe((data) => {
      //console.log("getBySubCatPaged.data: " + JSON.stringify(data));
      this.products = data.results;
      this.pageSize = data.pageSize;
      this.currentPage = data.currentPage-1;
      this.pageCount =  data.pageCount;
      this.rowCount = data.rowCount;
      this.lastRowOnPage = data.lastRowOnPage;
      this.firstRowOnPage = data.firstRowOnPage;
      console.log("getBySubCatPaged.pageSize: " + this.pageSize);
      console.log("getBySubCatPaged.currentPage: " + this.currentPage);
      console.log("getBySubCatPaged.pageCount: " + this.pageCount);
      console.log("getBySubCatPaged.rowCount: " + this.rowCount);
      console.log("getBySubCatPaged.lastRowOnPage: " + this.lastRowOnPage);
      console.log("getBySubCatPaged.firstRowOnPage: " + this.firstRowOnPage);

      // this.paginator.length = this.rowCount;
      if (this.paginator === undefined) {} else {
        console.log("paginator defined");
        this.paginator.pageIndex = this.currentPage;

      }
      // this.paginator.pageSize = this.pageSize;

      console.log("getBySubCatPaged.resetpage: " + resetpage);
      // console.log("getBySubCatPaged.paginator.pageIndex: " + this.paginator.pageIndex);

      if (resetpage) {
        this.paginator.firstPage();
      }

      this.dataSource = new MatTableDataSource<Product> (this.products); //pass the array you want in the table
      this.dataSource.sort = this.sort;
    });

  }

  pageChanged(event: PageEvent) {
    console.log("[pageChanged]");
    console.log("event: " + JSON.stringify(event) );
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    console.log("pageChanged.pageSize: " + this.pageSize);
    console.log("pageChanged.currentPage: " + this.currentPage);
    console.log("subcategorySelection: " + this.subcategorySelection);
    this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, false);
    //// this.getProducstPaged2(this.currentPage, this.pageSize);
  }

  // sortData(sort: Sort) {
  //   console.log("[sortData]");
  //   console.log("sort.active: " + sort.active);
  //   console.log("Sort.direction: " + sort.direction);
  //   var column = UppercaseFirstLetters(sort.active);
  //   console.log("column: " + column);
  //   //this.getAndSort(column, sort.direction);
  //   console.log("column: " + column);
  //   //this.getBySubCatAndSort(this.subcategorySelection, column, sort.direction);
  //   this.getBySubCatSortAndPage(this.subcategorySelection, column, sort.direction, this.currentPage, this.pageSize);

  // }


  // getProducts() {
  //   console.log("[getProducts]");
  //   this.productService.get().subscribe((data) => {
  //     this.products = data;
  //   });
  // }

  // getProductsBySubCategoryId() {
  //   console.log("[getProductsBySubCategoryId]");
  //   this.productService.get().subscribe((data) => {
  //     this.products = data;
  //   });
  // }

  // // sorts ALL products
  // getAndSort(column: string, direction: string) {
  //   console.log("[getAndSort]");
  //   this.productService.getAndSort(column, direction).subscribe((data) => {
  //     this.products = data;
  //   });

  // }

  // // sorts products for a given subcategory
  // getBySubCatAndSort(subcat: number, column: string, direction: string) {
  //   console.log("[getBySubCatAndSort]");
  //   this.productService.getBySubCatAndSort(subcat, column, direction).subscribe((data) => {
  //     this.products = data;
  //   });

  // }

  getCategories() {
    console.log("[getCategories]");
    this.productCategoryService.get().subscribe((data) => {
      console.log("getCategories: " + JSON.stringify(data));
      this.categories = data;
      if (this.categories.length>0) {
        this.categorySelection=this.categories[0].productCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          console.log("getByCategoryId: " + JSON.stringify(data));
          this.subcategories = data;
          if (this.subcategories.length>0) {
            this.subcategorySelection = this.subcategories[0].productSubCategoryId;
            //this.currentPage = 1;
            console.log("getCategories.currentPage: " + this.currentPage);
            console.log("getCategories.pageSize: " + this.pageSize);
            this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, false);

            // var resetpage = false;
            // this.productService.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize).subscribe((data) => {
            //   //console.log("getBySubCatPaged.data: " + JSON.stringify(data));
            //   this.products = data.results;
            //   this.pageSize = data.pageSize;
            //   this.currentPage = data.currentPage;
            //   this.pageCount =  data.pageCount;
            //   this.rowCount = data.rowCount;
            //   this.lastRowOnPage = data.lastRowOnPage;
            //   this.firstRowOnPage = data.firstRowOnPage;
            //   console.log("[getBySubCatPaged]");
            //   console.log("getBySubCatPaged.currentPage: " + this.currentPage);
            //   console.log("getBySubCatPaged.pageSize: " + this.pageSize);
            //   console.log("getBySubCatPaged.pageCount: " + this.pageCount);
            //   console.log("getBySubCatPaged.rowCount: " + this.rowCount);
            //   console.log("getBySubCatPaged.lastRowOnPage: " + this.lastRowOnPage);
            //   console.log("getBySubCatPaged.firstRowOnPage: " + this.firstRowOnPage);
        
            //   // this.paginator.length = this.rowCount;
            //   this.paginator.pageIndex = this.currentPage-1;
            //   // this.paginator.pageSize = this.pageSize;
        
            //   // console.log("getBySubCatPaged.resetpage: " + resetpage);
            //   console.log("getBySubCatPaged.paginator.pageIndex: " + this.paginator.pageIndex);
        
            //   if (resetpage) {
            //     this.paginator.firstPage();
            //   }
        
            //   // console.log("getBySubCatPaged.paginator.pageIndex2: " + this.paginator.pageIndex);
        
            //   this.dataSource = new MatTableDataSource<Product> (this.products); //pass the array you want in the table
            //   this.dataSource.sort = this.sort;
            // });
        


            //this.getProducstPaged2(this.currentPage, this.pageSize);
            //this.getBySubCatSortAndPage(this.subcategorySelection, this.displayedColumns[1], "asc", this.currentPage, this.pageSize);
            // this.productService.getBySubCategoryId(this.subcategorySelection).subscribe((data) => {
            //   this.products = data;
            // });
          
          } else {
            this.subcategorySelection = 0;
            this.products = [];
          }
        });

      } else {
        this.categorySelection = 0;
        this.subcategorySelection = 0;
        this.products = [];
      }

    });
  }

  getSubCategories(categoryId: number) {
    console.log("[getSubCategories]");
    this.productSubCategoryService.getByCategoryId(categoryId).subscribe((data) => {
      this.subcategories = data;
    });
  }

  ProductCategoryChangeAction(cat) {
    console.log("[ProductCategoryChangeAction]");
    console.log("ProductCategoryChangeAction.cat: " + cat);
    // this.categorySelection = cat;
    this.productSubCategoryService.getByCategoryId(cat).subscribe((data) => {
      this.subcategories = data;
      console.log("ProductCategoryChangeAction.subcategories: " + JSON.stringify(this.subcategories));
      if (this.subcategories.length>0) {
        this.subcategorySelection = this.subcategories[0].productSubCategoryId;
        // this.currentPage = 1;
        console.log("ProductCategoryChangeAction.currentPage: " + this.currentPage);
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
        // this.productService.getBySubCategoryId(this.subcategorySelection).subscribe((data) => {
        //   this.products = data;
        // });
      } else {
        this.subcategorySelection = 0;
        this.products = [];
      }
      
    })
  }

  ProductSubCategoryChangeAction(subcat) {
    console.log("[ProductSubCategoryChangeAction]");
    console.log("ProductSubCategoryChangeAction.subcat: " + subcat);
    //this.currentPage = 1;
    console.log("ProductCategoryChangeAction.currentPage: " + this.currentPage);
      // setting the value here because NgModel two way binding not working in Unit Test
      // this.subcategorySelection = subcat;

    console.log("ProductCategoryChangeAction.subcategorySelection: " + this.subcategorySelection);
    this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
  }

  openNewModal() {
    console.log("openNewModal.id: " + this.categorySelection);
    //openDeleteModal() {
    // console.log("cat.name: " + cat.name);
    // console.log("cat.productSubCategoryId: " + cat.productSubCategoryId);
    //const dialogRef = this.dialog.open(CategoriesDelete2Component);
    //const dialogRef = this.dialog.open(CategoriesDelete2Component);
    const dialogRef = this.dialog.open(ProductNewComponent,
       {
        width: '400px',
        data: { productCategoryId: this.categorySelection, productSubCategoryId: this.subcategorySelection },
      }
      );
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Dialog result: ${JSON.stringify(result)}`);

        this.categorySelection = result.productCategoryId;
        this.subcategorySelection = result.productSubCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          this.subcategories = data;
        });
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
        // this.productService.getBySubCategoryId(this.subcategorySelection).subscribe((data) => {
        //   this.products = data;
        // });

      }
    });
  }
  
  openEditModal(id: number) {
    console.log("openEditModal.productSubCategory: " + id);
    const dialogRef = this.dialog.open(ProductEditComponent, {
        width: '400px',
        data: { productId: id },
      });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Dialog result: ${JSON.stringify(result)}`);
        this.categorySelection = result.productCategoryId;
        this.subcategorySelection = result.productSubCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          this.subcategories = data;
        });
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
        // this.productService.getBySubCategoryId(this.subcategorySelection).subscribe((data) => {
        //   this.products = data;
        // });
      }
    });
  }
  
  openDeleteModal(product: Product) {
  //openDeleteModal() {
    console.log("product.name: " + product.name);
    console.log("product.productId: " + product.productId);
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
        width: '400px',
        data: product,
      });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
        // this.productService.getBySubCategoryId(this.subcategorySelection).subscribe((data) => {
        //   this.products = data;
        // });
      }
    });
  }


}

