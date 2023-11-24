import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Max, Min } from "class-validator";
import People from "./People";

@Entity()
export default class FrenchMark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Min(0)
  @Max(20)
  mark: number;

  @ManyToOne(() => People, (people) => people.frenchMark)
  students: People;
}
