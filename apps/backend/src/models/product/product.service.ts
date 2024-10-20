import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from './product.entity';
import { ProductDTO } from './dto/product.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(username: string): Promise<ProductDTO[]> {
    const products: Product[] = await this.productsRepository.find({
      where: { deleted: false },
      relations: ['owner'],
    });

    return products.map((p) =>
      plainToInstance(ProductDTO, {
        id: p.id,
        name: p.name,
        dateCreated: p.dateCreated,
        price: p.price,
        quantity: p.quantity,
        isEditable: p.owner ? p.owner.username === username : false,
      }),
    );
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async createProduct(product: Product, username?: string): Promise<Product> {
    console.log(username);
    if (username) {
      const user = await this.userRepository.findOne({
        where: { username },
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
