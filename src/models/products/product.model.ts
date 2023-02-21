import { CategoryDto } from '../categories/category.model';
export class ProductDto { 
  id!: string; 
  name!: string;  
  categoryId!: string; 
  Category?: CategoryDto;
  price!: number; 
  description!: string; 
  quantity!: number;
}
