import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { User } from '../models/users/user.entity';
//import { ProductsService } from 'src/models/product/product.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return true;
    }
    return false;
  }

  // async validateUserPermissions(user: User): Promise<Product[]> {
  //   return await this.productsService.findOwnedProducts(user);
  // }

  async logIn(user: User) {
    const isValid = await this.validateUser(user.username, user.password);
    if (isValid) {
      return {
        access_token: this.jwtService.sign({ user }),
      };
    } else {
      throw new UnauthorizedException('Usuário ou senha inválidos!');
    }
  }
}
