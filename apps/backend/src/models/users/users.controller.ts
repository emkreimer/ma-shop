import { Controller, Get, Post, Put, Body } from '@nestjs/common';
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

  @Get('/one')
  async getOne(@Body() username: string): Promise<User> {
    return await this.userService.findOne(username);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Put('/update')
  async update(@Body() user: User): Promise<User> {
    return await this.userService.updateUser(user);
  }

  @Put('/delete')
  async delete(@Body() username: string): Promise<void> {
    return await this.userService.deleteUser(username);
  }
}
