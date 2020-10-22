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

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'datetime' })
  updatedAt: Date;

}
