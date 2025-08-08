import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilsService } from './utils.service';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [UtilsService, MailerService],
  exports: [UtilsService, MailerService]
})
export class AppModule {}
