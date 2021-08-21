import { Response, Request } from "express";
import { RabbitmqServer } from "../config/rabbitmq-server";

export class AppController {
  public async index(req: Request, res: Response) {
    res.send("Hello, express!");
  }

  public async store(req: Request, res: Response) {
    const server = new RabbitmqServer("amqp://guest:guest@localhost:5672");
    const message1 = "Enviado do Express para a fila";
    const message2 = "Enviado do Express para a exchange";
    await server.start();
    await server.publishInQueue("nest", message1);
    await server.publicInExchange("amq.direct", "rota", message2);
    console.log(message2);
    res.send(message2);
  }
}
