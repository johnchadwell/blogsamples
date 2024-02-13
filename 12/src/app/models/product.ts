import { ProductCategory } from "./productcategory";
import { ProductSubCategory } from "./productsubcategory";

export interface Product {
    productId: number;
    productGuid: string;
    name: string;
    description?: string;
    unitPrice: number;
    isDeleted: boolean;
    productCategory: ProductCategory;
    productSubCategory: ProductSubCategory;

}
