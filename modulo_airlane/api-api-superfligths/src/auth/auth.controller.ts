import { Controller } from '@nestjs/common';
import { Body, Post, Req, UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly serviceAuth: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return await this.serviceAuth.signIn(req.user);
  }
  @Post('signup')
  async signUn(@Body() dto: UserDto) {
    return await this.serviceAuth.SignUp(dto);
  }

}
