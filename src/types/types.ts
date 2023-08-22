
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}



export interface Cart {
    id:    number;
    title:  string;
    images: string[];
    quantity: number,
    price: number
}

export interface Category {
    id:    number;
    name:  string;
    image: string;
}

export interface Categories {

    categories: Array<Category>
}
export type CategoryGroup = {

    categories: Array<Category>;
};
export interface Products {
 products: Product[]
}

export interface Product {

    title:       string;
    id:          number;
    price:       number;
    description: string;
    images:      string[];
    category:    Category;
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