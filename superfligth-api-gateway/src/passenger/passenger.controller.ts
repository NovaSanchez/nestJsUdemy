import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { IPasseger } from "src/common/interfaces/passeger.interface";
import { ClientPRoxySuperFlights } from "src/common/proxy/client.proxy";
import { passagerDto } from "./dto/passeger.dto";
import { Passengermsg } from "src/common/constans";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("passenger")
@Controller("api/v2/passenger")
export class PassengerController {
  constructor(private readonly clientProxy: ClientPRoxySuperFlights) {}
  private _clientProxyPasseger = this.clientProxy.ClientProxyPassenger();

  @Post()
  Create(@Body() dto: passagerDto): Observable<IPasseger> {
    return this._clientProxyPasseger.send(Passengermsg.CREATE, dto);
  }
  @Get()
  findall(): Observable<IPasseger[]> {
    return this._clientProxyPasseger.send(Passengermsg.FIND_ALL, "");
  }
  @Get(":id")
  findone(@Param("id") id: string): Observable<IPasseger[]> {
    return this._clientProxyPasseger.send(Passengermsg.FIND_ONE, "");
  }
}
