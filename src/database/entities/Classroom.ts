import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator";

@Entity()
export default class Classroom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 100, {
    message: "Le nom de la classe doit contenir entre 5 et 100 caractère",
  })
  @Column({ length: 100 })
  name: string;
}
