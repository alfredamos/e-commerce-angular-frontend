import { Gender } from "src/enums/gender.enum";
import { UserType } from "src/enums/user-type.enum";

export class SignupDto {
  name!: string;
  email!: string;
  phone!: string;
  password!: string;
  newPassword!: string;
  userType!: UserType;
  gender!: Gender;
}
