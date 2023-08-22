import { type Category } from "./category.model";
// Use https://app.quicktype.io/
export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[]
}

export interface ProductDetails {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    creationAt: string;
    category: {
        name:string,
        id: number
    }
}