import { Module } from '@nestjs/common';
import UserController from './api/controllers/user.controller';
import { AuthenticationModule } from './api/modules/authentication.module';

@Module({
  imports: [AuthenticationModule],
  controllers: [UserController],
})

export class AppModule {}
