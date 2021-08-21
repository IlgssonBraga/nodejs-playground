import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/nest')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  store(): Promise<string> {
    return this.appService.store();
  }
}
