import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

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

  async findOne(username: string): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { username, deleted: false },
    });
  }

  async createUser(user: User): Promise<User> {
    if (await this.validateNewUser(user.username)) {
      user.password = await bcrypt.hash(user.password, this.saltOrRounds);
      const newUser = this.usersRepository.create(user);
      return this.usersRepository.save(newUser);
    } else {
      throw new Error('Esse usuário já existe!');
    }
  }

  async updateUser(user: User): Promise<User> {
    let u = await this.findOne(user.username);
    u = { ...u, ...user };
    return this.usersRepository.save(u);
  }

  async deleteUser(username: string): Promise<void> {
    const user = await this.findOne(username);
    user.deleted = true;
    this.usersRepository.save(user);
  }

  async validateNewUser(username: string): Promise<boolean> {
    const user = await this.findOne(username);
    return user === null;
  }
}
