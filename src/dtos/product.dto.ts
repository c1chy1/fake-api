import { type Product } from "../types/types";
import { type Category } from "../types/types";

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
    categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}