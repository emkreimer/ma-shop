import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

//import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  saltOrRounds: number = 10;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<[User[], number] | undefined> {
    return this.usersRepository.findAndCount();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async createUser(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, this.saltOrRounds);
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
}
