import { Product } from "../types/types";
import { Category } from "../types/types";

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
    categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}