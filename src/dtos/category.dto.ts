import { Category } from "../models/category.model";


export interface CreateCategoryInterface extends Omit<Category, 'id'>{};

