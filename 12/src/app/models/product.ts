import { ProductCategory } from "./productcategory";
import { ProductSubCategory } from "./productsubcategory";

export interface Product {
    productId: number;
    productGuid: string;
    // productCategoryOldId: number;
    // productSubCategoryOldId: number;
    name: string;
    description?: string;
    unitPrice: number;
    // itemsAvailable: number;
    isDeleted: boolean;
    productCategory: ProductCategory;
    productSubCategory: ProductSubCategory;

}