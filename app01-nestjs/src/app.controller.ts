import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService, User } from './app.service';

export interface CreateUserDto {
  name: string;
  cpf: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): User[] {
    return this.appService.index();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto): User {
    return this.appService.store(createUserDto);
  }

  @Get(':cpf')
  show(@Param() params): User {
    return this.appService.show(params.cpf);
  }
}
