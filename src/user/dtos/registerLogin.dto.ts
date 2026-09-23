import { IsString } from 'class-validator';

export class RegisterLoginUserDto {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
