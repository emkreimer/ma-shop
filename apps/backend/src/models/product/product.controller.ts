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
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req): Promise<ProductDTO[]> {
    return await this.productService.findAll(req.user.username);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req, @Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product, req.user.username);
  }

  @Put(':id')
  async update(@Body() product: Product): Promise<Product> {
    return await this.productService.updateProduct(product);
  }

  @Put('delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.productService.deleteProduct(id);
  }
}
