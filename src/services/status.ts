import Status from "../database/entities/Status";
import { validate } from "class-validator";

export default class statusServices {
  static createStatus = async (userRequest: any) => {
    try {
      const newStatus = await Status.create(userRequest);
      const errors = await validate(newStatus);

      if (errors.length > 0) {
        return errors;
      } else {
        return await newStatus.save();
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllStatus = async () => {
    try {
      const allStatus = await Status.find();

      return allStatus;
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
