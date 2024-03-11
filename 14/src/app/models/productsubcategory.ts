import { ProductCategory } from "./productcategory";

export interface ProductSubCategory {
    productSubCategoryId: number;
    name: string;
    isDeleted: boolean;
    productCategory: ProductCategory
}