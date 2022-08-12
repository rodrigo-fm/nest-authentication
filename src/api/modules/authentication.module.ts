import { Module } from "@nestjs/common";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { User } from "src/domain/entities";
import AuthenticationController from "../controllers/authentication.controller";
import LoginUseCase from "../usecases/login.usecase";

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [LoginUseCase],
})
export class AuthenticationModule {}
