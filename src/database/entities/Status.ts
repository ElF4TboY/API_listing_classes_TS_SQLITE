import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student: boolean;

  @Column()
  mainTeacher: boolean;

  @Column()
  teacher: boolean;
}
