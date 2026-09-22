import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SearchEntity } from './search.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column({ unique: true })
  password!: string;

  @OneToMany(() => SearchEntity, (search) => search.user)
  searches!: SearchEntity[];
}
