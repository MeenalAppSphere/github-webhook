
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import {
    GithubGuard,
    GithubWebhookEvents
} from '@dev-thought/nestjs-github-webhooks';


@Controller('auth')
export class AuthController {

    @Post('login')
    @GithubWebhookEvents(['login'])
    @UseGuards(GithubGuard)
    githubWebhook(@Body() payload: any) {
        console.log('github action preformed with webhook on port 80, data chnaged');
    }
}
