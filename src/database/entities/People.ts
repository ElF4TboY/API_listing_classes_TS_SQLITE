import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";

import Classroom from "./Classroom";

@Entity()
export default class People extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(2, 150, {
    message: "Le prénom de l'élève doit contenir entre 2 et 100 caractère",
  })
  @Column({ length: 150 })
  firstname: string;

  @Length(2, 150, {
    message:
      "Le nom de famille de l'élève doit contenir entre 2 et 100 caractère",
  })
  @Column({ length: 150 })
  lastname: string;

  @ManyToMany(() => Classroom, (classroom) => classroom.peoples)
  classrooms: Classroom[];
}
