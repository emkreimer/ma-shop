import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
//import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll(): Promise<[User[], number]> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }
}
