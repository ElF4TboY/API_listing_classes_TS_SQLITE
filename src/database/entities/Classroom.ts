import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";

import People from "./People";

@Entity()
export default class Classroom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 100, {
    message: "Le nom de la classe doit contenir entre 5 et 100 caractère",
  })
  @Column({ length: 100 })
  name: string;

  @ManyToMany(() => People, (people) => people.classrooms, { cascade: true })
  @JoinTable()
  peoples: People[];
}
