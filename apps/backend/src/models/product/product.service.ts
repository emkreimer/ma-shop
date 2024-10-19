import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async findOwnedProducts(user: User): Promise<Product[]> {
    if (user.role === 'admin') {
      return this.productsRepository.find();
    } else {
      return this.productsRepository.find({ where: { owner: user } });
    }
  }

  async createProduct(product: Product): Promise<Product> {
    const newProduct = this.productsRepository.create(product);
    return this.productsRepository.save(newProduct);
  }

  async updateProduct(p: Product): Promise<Product> {
    let product = await this.findOne(p.id);
    product = { ...product, ...p };
    return this.productsRepository.save(product);
  }
}
