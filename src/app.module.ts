import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubWebhooksModule } from '@dev-thought/nestjs-github-webhooks';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [GithubWebhooksModule.forRoot({
    webhookSecret: process.env.GITHUB_WEBHOOK_SECRET
  })],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule { }
