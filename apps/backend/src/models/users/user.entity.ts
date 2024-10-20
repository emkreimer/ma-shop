import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { Role } from 'src/config/roles/roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.COMUM })
  role: Role;

  @OneToMany(() => Product, (product) => product.owner)
  products: Product[];

  @Column({ default: false })
  deleted: boolean;
}
