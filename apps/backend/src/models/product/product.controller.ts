import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product);
  }
}
