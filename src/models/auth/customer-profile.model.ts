import { UserType } from "src/enums/user-type.enum";

export class CustomerProfileDto {
  id!: string;
  name!: string;
  userType!: UserType;
  token?: string;
  message?: string;
  isLoggedIn?: boolean;
}
