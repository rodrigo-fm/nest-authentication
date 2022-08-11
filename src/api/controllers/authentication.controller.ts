import { Body, Controller, Inject, Post, Put } from "@nestjs/common";
import { ILoginUseCase } from "src/domain/usecases";
import { CreateAccountRequest, LoginRequest } from "../DTOs";
import LoginUseCase from "../usecases/login.usecase";

@Controller("authentication")
export default class AuthenticationController {

    constructor(
        @Inject(LoginUseCase) private readonly loginUseCase: ILoginUseCase
    ) {}

    @Post("login")
    async login(@Body() loginRequest: LoginRequest): Promise<string> {
        return await this.loginUseCase.handle(loginRequest.email, loginRequest.password);
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