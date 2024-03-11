import {Product} from "../product";

export interface PagedResults {
    results: Product[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    lastRowOnPage: number;
    firstRowOnPage: number;
}