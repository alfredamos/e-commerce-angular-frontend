import { Status } from "src/enums/status.enum";
import { CustomerDto } from '../customers/customer.model';
import { ProductDto } from '../products/product.model';

export class OrderDto{
  id!: string;
  customerId!: string;
  customer?: CustomerDto;
  productId!: string;
  product?: ProductDto;
  status?: Status;
  quantity!: number;
}