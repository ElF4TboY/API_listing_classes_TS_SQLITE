import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator";

@Entity()
export default class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 100, {
    message: "Le nom du status doit contenir entre 5 et 50 caractère",
  })
  @Column({ length: 100 })
  category: string;
}
