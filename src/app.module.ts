import { Module } from '@nestjs/common';
import AuthenticationController from './api/controllers/authentication.controller';
import UserController from './api/controllers/user.controller';

@Module({
  imports: [],
  controllers: [AuthenticationController, UserController],
  providers: [],
})
export class AppModule {}
