
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import {
    GithubGuard,
    GithubWebhookEvents
} from '@dev-thought/nestjs-github-webhooks';


@Controller('auth')
export class AuthController {

    @Post()
    @GithubWebhookEvents(['login'])
    @UseGuards(GithubGuard)
    githubWebhook(@Body() payload: any) {
        console.log('Do something with the payload');
    }
}
