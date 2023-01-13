import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.FindByUsername(username);
    const pass = await this.userService.checkpassword(password, user.password);
    if (user && pass) return user;
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };
    try {
      console.log(this.jwtService);
      return { access_token: this.jwtService.sign(payload) };
    } catch (error) {
      console.error(error);
    }
  }

  async SignUp(UserDto: UserDto) {
    return this.userService.Create(UserDto);
  }
}
