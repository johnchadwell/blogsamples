import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './products.list.component';
import {ProductCategoryServiceStub, ProductSubCategoryServiceStub, ProductServiceStub, MatDialogStub} from "./products.list.mock"
import {ProductService} from '../../../services/product.service';
import {ProductCategoryService} from '../../../services/productcategory.service';
import {ProductSubCategoryService} from '../../../services/productsubcategory.service';
import { MatDialog} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatPaginatorModule, FormsModule, BrowserAnimationsModule, MatIconModule, MatDialogModule  ],
      declarations: [ ProductListComponent ],
      providers: [
      {provide: ProductCategoryService, useClass: ProductCategoryServiceStub},
      {provide: ProductSubCategoryService, useClass: ProductSubCategoryServiceStub},
      {provide: ProductService, useClass: ProductServiceStub},
      {provide: MatDialog, useClass: MatDialogStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

