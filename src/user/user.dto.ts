import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Matches(/^(?=.*[a-zA-Z]).{8,16}$/)
  @IsNotEmpty()
  password: string;
}
