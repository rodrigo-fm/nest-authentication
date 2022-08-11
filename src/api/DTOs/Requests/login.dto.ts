import { IsString, IsEmail } from 'class-validator';

export default class LoginRequest {
    @IsEmail({message: 'invalid email'})
    email: string;
    @IsString({message: 'password field is required'})
    password: string;
}