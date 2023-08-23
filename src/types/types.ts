

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
    image?: string;
}

export interface Categories {

    categories: Category[]
}

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
