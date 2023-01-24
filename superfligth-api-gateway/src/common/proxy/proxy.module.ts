import { Module } from "@nestjs/common";
import { ClientPRoxySuperFlights } from "./client.proxy";

@Module({
  providers: [ClientPRoxySuperFlights],
  exports: [ClientPRoxySuperFlights],
});

export class ProxyModule { }