import { Injectable } from '@nestjs/common';
import { RabbitmqServer } from './rabbitmq-server';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  async store(): Promise<string> {
    const server = new RabbitmqServer('amqp://guest:guest@localhost:5672');
    const message1 = 'Enviado do Nest para a fila';
    const message2 = 'Enviado do Nest para a exchange';
    await server.start();
    await server.publishInQueue('express', message1);
    await server.publicInExchange('amq.direct', 'rota2', message2);
    console.log('Hello Nest! - POST');
    return 'Hello Nest! - POST';
  }
}
