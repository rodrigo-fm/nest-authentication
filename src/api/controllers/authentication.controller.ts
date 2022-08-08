import { Body, Controller, Post, Put } from "@nestjs/common";
import { CreateAccountRequest, LoginRequest } from "../DTOs";

@Controller("authentication")
export default class AuthenticationController {

    @Post("login")
    login(@Body() loginRequest: LoginRequest): LoginRequest {
        return loginRequest;
    }

    @Post("register")
    createAccount(@Body() createAccountRequest: CreateAccountRequest): string {
        return "create account route";
    }

    @Put("change-password")
    changePassowrd(): string {
        return "change password route";
    }

    @Post("reset-password")
    resetPassword(): string {
        return "reset password route";
    }
}