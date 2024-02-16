import { of } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductCategory } from '../../../models/productcategory';
import { ProductSubCategory } from '../../../models/productsubcategory';
import {PagedResults} from '../../../models/responses/pagedresults';

export const FAKE_PRODUCTCATEGORY: ProductCategory[] = 
[
  {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
  {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}
]

export const FAKE_PRODUCTSUBCATEGORY: ProductSubCategory[] = 
[
    {productSubCategoryId: 1, name: "Dimensional Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}},
    {productSubCategoryId: 2, name: "Pressure Treated Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}},
    {productSubCategoryId: 17, name: "Concrete Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}},
    {productSubCategoryId: 18, name: "Mortar Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}}
       
]

export const FAKE_PRODUCTSUBCATEGORY_1: ProductSubCategory = 
{
    productSubCategoryId: 1,
    name: "Dimensional Lumber",
    isDeleted: false,
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}
}

export const FAKE_PRODUCTS: Product[] = 
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
  },
  {
    productId: 3,  name: "Fir S4S Kiln-dried Lumber", description: "2-in x 4-in x 12-ft", unitPrice: 6.32, isDeleted: false,
    productGuid: "3E8C64F8-CDCA-4241-ABA7-926B9CE90792",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 4, name: "Southern Yellow Pine S4S Kiln-dried Lumber",  description: "2-in x 8-in x 8-ft", unitPrice: 5.78, isDeleted: false,
    productGuid: "6227C1F7-37BF-4046-86C0-143C562E6A46",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 5, name: "Spruce Pine Fir S4S Kiln-dried Lumber", description: "2-in x 6-in x 10-ft", unitPrice: 13.98, isDeleted: false,
    productGuid: "5A166EFF-05A9-4FA7-A52F-7743FC9DF268",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 6, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 10-in x 8-ft", unitPrice: 6.63, isDeleted: false,
    productGuid: "4ADBF805-3D62-4BC6-9CBA-9AC3836C1020",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 7, name: "Fir S4S Kiln-dried Lumber", description: "2-in x 6-in x 10-ft", unitPrice: 9.35, isDeleted: false,
    productGuid: "A237E698-92D5-425F-8322-96629761A703",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 8, name: "Pine S4S Lumber", description: "2-in x 4-in x 4-ft", unitPrice: 2.98, isDeleted: false,
    productGuid: "11708B9C-BAC6-4551-B5DB-A0B224DE7AC7",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 9, name: "S4S Lumber", description: "4-in x 4-in x 8-ft", unitPrice: 14.55, isDeleted: false,
    productGuid: "EB324F2E-91EF-4FC2-9869-6968B46A0087",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 10, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 8-in x 10-ft", unitPrice: 6.98, isDeleted: false,
    productGuid: "CB5A2B4E-15DC-49F8-A6B7-07AEF067ACF3",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 11, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 8-in x 12-ft", unitPrice: 8.93, isDeleted: false,
    productGuid: "B7B1F2FE-BE58-47C0-BC27-D0BCD10E569E",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 12, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 12-in x 12-ft", unitPrice: 15.82, isDeleted: false,
    productGuid: "D1AA45AA-90AF-4FDE-B58B-F1913BAE0614",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 13, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 8-in x 16-ft", unitPrice: 12.82, isDeleted: false,
    productGuid: "1235CF46-152C-47E7-9111-9707F95335DC",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 14, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 12-in x 8-ft", unitPrice: 8.34, isDeleted: false,
    productGuid: "A80A673D-C772-4A07-95D1-4AEE13E23A77",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 15, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 12-in x 16-ft", unitPrice: 20.43, isDeleted: false,
    productGuid: "D4D392F1-94F3-45C3-A192-06DC9AEDC0C7",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 16, name: "Fir S4S Kiln-dried Lumber", description: "2-in x 4-in x 16-ft", unitPrice: 8.98, isDeleted: false,
    productGuid: "CF621A02-EFB1-4C2B-82BA-E900DBEEC112",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 17, name: "Southern Yellow Pine S4S Kiln-dried Lumber", description: "2-in x 10-in x 16-ft", unitPrice: 15.42, isDeleted: false,
    productGuid: "C89029FE-92FF-42DB-9A59-8F9867148822",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: FAKE_PRODUCTSUBCATEGORY_1
  },
  {
    productId: 50, name: "Ground Contact Wood", description: "4-in x 4-in #2",unitPrice: 7.48, isDeleted: false,
    productGuid: "205AF2B9-B75F-44BE-93C8-ED9F01BB5346",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: {productSubCategoryId: 2, name: "Pressure Treated Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}}
  },
  {
    productId: 51, name: "Prime Square Wood", description: "2-in x 4-in #2", unitPrice: 4.98, isDeleted: false,
    productGuid: "4B84F0D5-F3BF-4687-AA3C-60DAFA72FD3B",
    productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false},
    productSubCategory: {productSubCategoryId: 2, name: "Pressure Treated Lumber", isDeleted: false, productCategory: {productCategoryId: 1,name: "Building Supplies Lumber",isDeleted: false}}
  },
  {
    productId: 1210, name: "80-lb High Strength Concrete Mix", description: "Designed for pouring concrete 2-in thick or more", unitPrice: 5.6799998, isDeleted: false,
    productGuid: "C7DDA4BC-66F1-4133-A862-77038224F2A1",
    productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false},
    productSubCategory: {productSubCategoryId: 17, name: "Concrete Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}}
  },
  {
    productId: 1212, name: "60-lb High Strength Concrete Mix", description: "Use for: driveways, patios, foundations walls and footings, curbs", unitPrice: 4.0300002, isDeleted: false,
    productGuid: "6440E16C-C821-4B12-A8C5-4B7F1DD9E3CC",
    productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false},
    productSubCategory: {productSubCategoryId: 17, name: "Concrete Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}}
  },
  {
    productId: 1214, name: "60 lb. Mortar Mix", description: "Contractor grade, pre-blended mortar. Use for laying brick, block and stone", unitPrice: 6.98, isDeleted: false,
    productGuid: "E3013571-8A07-4295-A360-35121C2F016F",
    productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false},
    productSubCategory: {productSubCategoryId: 18, name: "Mortar Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}}
  },
  {
    productId: 1215, name: "80 lbs. Type-S Mortar Mix", description: "Contractor grade, pre-blended mortar mix. Use for laying brick, block and stone", unitPrice: 10.27, isDeleted: false,
    productGuid: "A003D9E4-BD56-4359-8FE9-70E8EC6CD970",
    productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false},
    productSubCategory: {productSubCategoryId: 18, name: "Mortar Mix", isDeleted: false, productCategory: {productCategoryId: 1014,name: "Cement & Masonry",isDeleted: false}}
  },
]

export class ProductCategoryServiceStub {
    get() {
      return of(FAKE_PRODUCTCATEGORY);
    }
}

export class ProductSubCategoryServiceStub {
    getByCategoryId(productCategoryId: number) {
      console.log("ProductSubCategoryServiceStub.getByCategoryId.productCategoryId: " + productCategoryId);
        var r = FAKE_PRODUCTSUBCATEGORY.filter(productsubcat => {return productsubcat.productCategory.productCategoryId == productCategoryId});
        console.log("ProductSubCategoryServiceStub.getByCategoryId.r: " + JSON.stringify(r));
        return of(r);
    }
}

export class ProductServiceStub {

  getBySubCatPaged(productSubCategoryId: number, page: number, itemsPerPage: number) {

      var r: PagedResults = {
          results: FAKE_PRODUCTS,
          pageSize: 5,
          currentPage: 1,
          pageCount: 20,
          rowCount: 100,
          lastRowOnPage: 0,
          firstRowOnPage: 0,
          
      };
      return of(r);

  }
}
export class MatDialogStub {}

