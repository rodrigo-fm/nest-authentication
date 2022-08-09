import { Module } from '@nestjs/common';
import AuthenticationController from './api/controllers/authentication.controller';
import UserController from './api/controllers/user.controller';
import LoginUseCase from './api/usecases/login.usecase';
import { useCaseProviders } from './common/injectionContainers/';
import UserMySQLRepository from './data/repositories/user-mysql.repository';

@Module({
  imports: [],
  controllers: [AuthenticationController, UserController],
  providers: [
    // ...useCaseProviders,
    {
      provide: LoginUseCase.className,
      useValue: LoginUseCase,
    },
    // {
    //   provide: UserMySQLRepository.className,
    //   useValue: UserMySQLRepository,
    // }
],
})

export class AppModule {}
