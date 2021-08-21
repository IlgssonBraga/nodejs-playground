import { RabbitmqServer } from "../config/rabbitmq-server";

const rabbitmqConsume = async () => {
  const server = new RabbitmqServer("amqp://guest:guest@localhost:5672");
  await server.start();
  await server.consume("express", (message) =>
    console.log(message.content.toString())
  );
};

export default rabbitmqConsume();
