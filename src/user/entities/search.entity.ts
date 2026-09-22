import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('search')
export class SearchEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  search_string!: string;

  @ManyToOne(() => UserEntity, (user) => user.searches, {
    onDelete: 'CASCADE', // delete searches when their user is deleted
  })
  @JoinColumn({ name: 'userId' }) // FK column name on the "many" side
  user!: UserEntity;
}
