import { IsString, IsEmail, ValidateIf, Length } from 'class-validator';

export default class CreateAccountRequest {
    @IsEmail()
    email: string;
    
    @IsString()
    name: string;
    
    @IsString()
    @Length(8, 50)
    password: string;

    @IsString()
    @Length(8, 50)
    confirmPassword: string;
}