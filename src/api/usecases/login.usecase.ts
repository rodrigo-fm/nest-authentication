import { Injectable } from "@nestjs/common";
import ILoginUseCase from "src/domain/usecases/login-interface.usecase";

@Injectable()
export default class LoginUseCase implements ILoginUseCase {
    async handle (email: string, password: string): Promise<string> {
        return Promise.resolve("login use case");
    }
}