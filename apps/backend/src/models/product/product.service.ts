import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async createProduct(product: Product, userId?: number): Promise<Product> {
    if (userId) {
      const user = await this.userRepository.findOne({
        where: { userId },
        relations: ['products'],
      });
      this.saveProductWithOwner(product, user);
    } else {
      return this.productsRepository.save(product);
    }
  }

  async saveProductWithOwner(product: Product, user: User): Promise<Product> {
    const newProduct = this.productsRepository.create({
      ...product,
      owner: user,
      deleted: false,
    });

    const savedProduct = await this.productsRepository.save(newProduct);
    user.products.push(savedProduct);
    await this.userRepository.save(user);
    return savedProduct;
  }

  async findOwnedProducts(user: User): Promise<Product[]> {
    if (user.role === 'admin') {
      return this.productsRepository.find();
    } else {
      return this.productsRepository.find({ where: { owner: user } });
    }
  }

  // async createProduct(product: Product): Promise<Product> {
  //   const newProduct = this.productsRepository.create(product);
  //   return this.productsRepository.save(newProduct);
  // }

  async updateProduct(p: Product): Promise<Product> {
    let product = await this.findOne(p.id);
    product = { ...product, ...p };
    return this.productsRepository.save(product);
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.findOne(id);
    product.deleted = true;
    this.productsRepository.save(product);
  }
}
