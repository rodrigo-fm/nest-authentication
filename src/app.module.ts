import { Module } from '@nestjs/common';
import UserController from './api/controllers/user.controller';
import { AuthenticationModule } from './api/modules/authentication.module';
import { TypeORMModule } from './api/modules/typeorm.module';

@Module({
  imports: [AuthenticationModule, TypeORMModule],
  controllers: [UserController],
})

export class AppModule {}
