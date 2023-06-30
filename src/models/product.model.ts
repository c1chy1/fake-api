import { Category } from "./category.model";
// Use https://app.quicktype.io/
export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    categoryId:  number;
}