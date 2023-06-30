
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}




export interface Product {

       id: Scalars['Float'];


}


export interface Category {
    id:    number;
    name:  string;
    image: string;
}


export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    categoryId:  number;
}