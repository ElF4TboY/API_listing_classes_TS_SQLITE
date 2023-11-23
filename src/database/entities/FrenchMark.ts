import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class FrenchMark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mark: number;
}
