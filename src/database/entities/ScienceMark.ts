import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Min, Max } from "class-validator";

import People from "./People";

@Entity()
export default class ScienceMark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Min(0)
  @Max(20)
  mark: number;

  @ManyToOne(() => People, (people) => people.scienceMark, {
    cascade: true,
    onDelete: "CASCADE",
  })
  students: People;
}
