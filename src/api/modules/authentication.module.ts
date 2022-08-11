import { Module } from "@nestjs/common";
import AuthenticationController from "../controllers/authentication.controller";
import LoginUseCase from "../usecases/login.usecase";

@Module({
  controllers: [AuthenticationController],
  providers: [LoginUseCase],
})
export class AuthenticationModule {}
