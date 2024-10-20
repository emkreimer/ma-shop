import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { User } from '../models/users/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async logIn(user: User) {
    const validUser = await this.validateUser(user.username, user.password);
    if (validUser) {
      const { username, role } = validUser;
      return {
        access_token: this.jwtService.sign({ username, role }),
      };
    } else {
      throw new UnauthorizedException('Usuário ou senha inválidos!');
    }
  }
}
