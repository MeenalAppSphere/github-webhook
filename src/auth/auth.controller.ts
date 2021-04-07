
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import {
    GithubGuard,
    GithubWebhookEvents
} from '@dev-thought/nestjs-github-webhooks';


@Controller('auth')
export class AuthController {

    @Post()
    @GithubWebhookEvents(['push'])
    @UseGuards(GithubGuard)
    githubWebhook(@Body() payload: any) {
        console.log('github action preformed with webhook on port 80, data chnaged');
    }
}
