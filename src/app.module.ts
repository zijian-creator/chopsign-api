import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilsService } from './utils.service';
import { MailerService } from './mailer.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [],
  providers: [UtilsService, MailerService],
  exports: [UtilsService, MailerService],
})
export class AppModule {}
