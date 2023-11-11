import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @Length(6)
  @IsString()
  password: string;
  avatar?: string;
}
