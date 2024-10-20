import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';
import { User } from '../users/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req): Promise<ProductDTO[]> {
    const user: User = req.user;
    return await this.productService.findAll(user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product);
  }

  @Put(':id')
  async update(@Body() product: Product): Promise<Product> {
    return await this.productService.updateProduct(product);
  }
}
