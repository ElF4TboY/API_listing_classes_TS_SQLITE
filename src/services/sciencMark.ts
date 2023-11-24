import ScienceMark from "../database/entities/ScienceMark";
import { validate } from "class-validator";

export default class scienceMarkServices {
  static createScienceBoard = async (userRequest: any) => {
    try {
      const createOne = await ScienceMark.create(userRequest);
      const errors = await validate(createOne);

      if (errors.length > 0) return errors;

      return await createOne.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllMathBoard = async () => {
    try {
      const getAll = await ScienceMark.find({
        relations: {
          students: true,
        },
      });

      return getAll;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteScienceBoard = async () => {
    try {
      const findAll = await ScienceMark.find();

      for (const deleteOne of findAll) {
        deleteOne.remove();
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
