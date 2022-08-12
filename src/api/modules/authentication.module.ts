import { Module } from "@nestjs/common";
import AuthenticationController from "../controllers/authentication.controller";
import { CreateAccountUseCase, LoginUseCase } from "../usecases";

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [LoginUseCase, CreateAccountUseCase],
})
export class AuthenticationModule {}
