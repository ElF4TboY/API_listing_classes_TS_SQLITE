import { validate } from "class-validator";
import MathMark from "../database/entities/MathMark";

export default class mathMarkServices {
  static createMathBoard = async (userRequest: any) => {
    try {
      const createOne = await MathMark.create(userRequest);
      const errors = await validate(createOne);

      if (errors.length > 0) return errors;

      return await createOne.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllMathBoard = async () => {
    try {
      const getAll = await MathMark.find({
        relations: {
          students: true,
        },
      });

      return getAll;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteMathBoard = async () => {
    try {
      const deleteAll = await MathMark.find();

      for (const deleteOne of deleteAll) {
        deleteOne.remove();
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
