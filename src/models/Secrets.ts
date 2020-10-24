import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('secrets')
export default class Secrets {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: 'varchar' })
  name: String;

  @Column({ type: 'varchar', nullable: false })
  login: String;

  @Column({ type: 'varchar' })
  password: String;

  @Column({ type: 'boolean', default: true })
  active: Boolean;

  @Column({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Column({ type: 'timestamp with time zone' })
  updatedAt: Date;

}
