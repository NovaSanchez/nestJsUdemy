import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { Transport } from "@nestjs/microservices/enums";
import { RabbitMq } from "../constans";

@Injectable()
export class ClientPRoxySuperFlights {
  constructor(private readonly config: ConfigService) { }

  ClientProxyUser(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get("AMQP_URL"),
        queue: RabbitMq.UserQueue,
      },
    });
  }
  ClientProxyPassenger(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get("AMQP_URL"),
        queue: RabbitMq.PassengerQueue,
      },
    });
  }
}