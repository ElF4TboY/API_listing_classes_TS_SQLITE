import { validate } from "class-validator";
import FrenchMark from "../database/entities/FrenchMark";

export default class frenchMarkServices {
  static createFrenchBoard = async (userRequest: any) => {
    try {
      const createOne = await FrenchMark.create(userRequest);
      const errors = await validate(createOne);

      if (errors.length > 0) return errors;

      return await createOne.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllFrenchBoard = async () => {
    try {
      const getAll = await FrenchMark.find({
        relations: {
          students: true,
        },
      });

      return getAll;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteFrenchBoard = async () => {
    try {
      const deleteAll = await FrenchMark.find();

      for (const deleteOne of deleteAll) {
        deleteOne.remove();
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
