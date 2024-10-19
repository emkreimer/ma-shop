import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
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
