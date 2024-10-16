import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async createProduct(name: string, price: number): Promise<Product> {
    const newProduct = this.productsRepository.create({ name, price });
    return this.productsRepository.save(newProduct);
  }
}
