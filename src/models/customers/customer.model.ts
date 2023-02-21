import { Gender } from "src/enums/gender.enum";
import { UserType } from "src/enums/user-type.enum";

export class CustomerDto {
  id!: string;
  name!: string;
  email!: string; 
  phone!: string;
  userType!: UserType;  
  gender!: Gender;
}
