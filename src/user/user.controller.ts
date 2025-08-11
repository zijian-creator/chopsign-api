import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  @Post('login')
  login(@Body() userDto: UserDto) {
    return userDto;
  }
}
