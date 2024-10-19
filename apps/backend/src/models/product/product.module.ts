import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, User])],
  providers: [ProductsService],
  exports: [ProductsService],
  controllers: [ProductController],
})
export class ProductModule {}
