import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Min, Max } from "class-validator";
import People from "./People";

@Entity()
export default class MathMark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Min(0)
  @Max(20)
  mark: number;

  @ManyToOne(() => People, (people) => people.mathMark)
  students: People;
}
