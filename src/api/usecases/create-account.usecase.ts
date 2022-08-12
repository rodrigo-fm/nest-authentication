import { Injectable } from "@nestjs/common";
import { ICreateAccountUseCase } from "src/domain/usecases";
import { CreateAccountParams } from "src/domain/usecases/create-account-interface.usecase";

@Injectable()
export default class CreateAccountUseCase implements ICreateAccountUseCase {
    async handle(params: CreateAccountParams): Promise<string> {
        throw new Error("Method not implemented.");
    }
}