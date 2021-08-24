import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './app.controller';

export interface User {
  name: string;
  cpf: string;
}

@Injectable()
export class AppService {
  private users: User[] = [
    {
      name: 'Ilgsson',
      cpf: '07811768402',
    },
  ];

  store({ name, cpf }: CreateUserDto): User {
    const user = {
      name,
      cpf,
    };

    const findUser = this.users.find((user) => user.cpf == cpf);

    if (findUser) {
      throw new BadRequestException();
    }

    this.users.push(user);

    return user;
  }

  index(): User[] {
    return this.users;
  }

  show(cpf: string): User {
    const user = this.users.find((user) => user.cpf == cpf);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
