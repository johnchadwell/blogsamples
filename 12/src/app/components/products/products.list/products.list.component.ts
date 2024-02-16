import { Component, OnInit, Inject, AfterViewInit, ViewChild   } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductCategory } from '../../../models/productcategory';
import { ProductSubCategory } from '../../../models/productsubcategory';
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
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-products.list',
  templateUrl: './products.list.component.html',
  styleUrls: ['./products.list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  categorySelection;
  subcategorySelection;
  products: Product[];
  categories: ProductCategory[];
  subcategories: ProductSubCategory[];
  displayedColumns: string[] = ['productId', 'name', 'productCategory.name', 'productSubCategory.name',  'unitPrice', 'isDeleted' ,'actions'];
 
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
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
      this.getCategories();
  }
  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
  }

  getBySubCatPaged(subcat: number, page: number, itemsPerPage: number, resetpage: boolean) {
    this.productService.getBySubCatPaged(subcat, page+1, itemsPerPage).subscribe((data) => {
      this.products = data.results;
      this.pageSize = data.pageSize;
      this.currentPage = data.currentPage-1;
      this.pageCount =  data.pageCount;
      this.rowCount = data.rowCount;
      this.lastRowOnPage = data.lastRowOnPage;
      this.firstRowOnPage = data.firstRowOnPage;

      if (this.paginator === undefined) {} else {
        this.paginator.pageIndex = this.currentPage;
      }

      if (resetpage) {
        this.paginator.firstPage();
      }

      this.dataSource = new MatTableDataSource<Product> (this.products); //pass the array you want in the table
      this.dataSource.sort = this.sort;
    });

  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, false);
  }

  getCategories() {
    this.productCategoryService.get().subscribe((data) => {
      this.categories = data;
      if (this.categories.length>0) {
        this.categorySelection=this.categories[0].productCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          this.subcategories = data;
          if (this.subcategories.length>0) {
            this.subcategorySelection = this.subcategories[0].productSubCategoryId;
            this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, false);
        
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
    this.productSubCategoryService.getByCategoryId(categoryId).subscribe((data) => {
      this.subcategories = data;
    });
  }

  ProductCategoryChangeAction(cat) {
    this.productSubCategoryService.getByCategoryId(cat).subscribe((data) => {
      this.subcategories = data;
      if (this.subcategories.length>0) {
        this.subcategorySelection = this.subcategories[0].productSubCategoryId;
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
      } else {
        this.subcategorySelection = 0;
        this.products = [];
      }
      
    })
  }

  ProductSubCategoryChangeAction(subcat) {
    this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
  }

  openNewModal() {
    const dialogRef = this.dialog.open(ProductNewComponent,
       {
        width: '400px',
        data: { productCategoryId: this.categorySelection, productSubCategoryId: this.subcategorySelection },
      }
      );
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.categorySelection = result.productCategoryId;
        this.subcategorySelection = result.productSubCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          this.subcategories = data;
        });
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
      }
    });
  }
  
  openEditModal(id: number) {
    const dialogRef = this.dialog.open(ProductEditComponent, {
        width: '400px',
        data: { productId: id },
      });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.categorySelection = result.productCategoryId;
        this.subcategorySelection = result.productSubCategoryId;
        this.productSubCategoryService.getByCategoryId(this.categorySelection).subscribe((data) => {
          this.subcategories = data;
        });
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
      }
    });
  }
  
  openDeleteModal(product: Product) {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
        width: '400px',
        data: product,
      });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getBySubCatPaged(this.subcategorySelection, this.currentPage, this.pageSize, true);
      }
    });
  }

}

