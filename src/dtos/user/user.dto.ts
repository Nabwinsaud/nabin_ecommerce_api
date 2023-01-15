import { isNotEmpty, isEmail, isString ,validate} from "class-validator";

export class UserDto {
  @isNotEmpty();
  @isEmail();
   @validate()  
  email: string;
}
