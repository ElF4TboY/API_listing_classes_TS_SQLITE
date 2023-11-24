import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";

import Classroom from "./Classroom";
import Status from "./Status";
import ScienceMark from "./ScienceMark";
import FrenchMark from "./FrenchMark";
import MathMark from "./MathMark";

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

  @JoinTable()
  @ManyToMany(() => Status, (status) => status.peoples, { cascade: true })
  status: Status[];

  @OneToMany(() => ScienceMark, (science) => science.students)
  scienceMark: ScienceMark[];

  @OneToMany(() => FrenchMark, (french) => french.students)
  frenchMark: FrenchMark[];

  @OneToMany(() => MathMark, (math) => math.students)
  mathMark: MathMark[];
}
