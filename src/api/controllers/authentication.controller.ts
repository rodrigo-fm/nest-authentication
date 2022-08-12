import { Body, Controller, Inject, Post, Put } from "@nestjs/common";
import { ICreateAccountUseCase, ILoginUseCase } from "src/domain/usecases";
import { CreateAccountRequest, LoginRequest } from "../DTOs";
import { CreateAccountUseCase } from "../usecases";
import LoginUseCase from "../usecases/login.usecase";

@Controller("authentication")
export default class AuthenticationController {

    constructor(
        @Inject(LoginUseCase) private readonly loginUseCase: ILoginUseCase,
        @Inject(CreateAccountUseCase) private readonly createAccountUseCase: ICreateAccountUseCase,
    ) {}

    @Post("login")
    async login(@Body() loginRequest: LoginRequest): Promise<string> {
        return await this.loginUseCase.handle(loginRequest.email, loginRequest.password);
    }

    @Post("register")
    async createAccount(@Body() createAccountRequest: CreateAccountRequest): Promise<string> {
        return await this.createAccountUseCase.handle({...createAccountRequest});
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