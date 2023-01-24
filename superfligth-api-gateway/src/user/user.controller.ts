import { Body, Controller, Post } from "@nestjs/common";
import { ClientPRoxySuperFlights } from "src/common/proxy/client.proxy";
import { UserDto } from "./dto/user.dto";
import { Observable } from "rxjs";
import { IUser } from "src/common/interfaces/user.interface";
import { usermsg } from "src/common/constans";

@Controller("api/v2/user")
export class UserController {
  constructor(private readonly clientProxy: ClientPRoxySuperFlights) {}
  private _clientProxyUser = this.clientProxy.ClientProxyUser();

  @Post()
  create(@Body() UserDTO: UserDto): Observable<IUser> {
    return this._clientProxyUser.send(usermsg.CREATE, UserDTO);
  }
}
