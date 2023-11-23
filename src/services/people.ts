import People from "../database/entities/People";
import { validate } from "class-validator";

export default class peopleServices {
  static createPeople = async (userRequest: any) => {
    try {
      const newPeople = await People.create(userRequest);
      const errors = await validate(newPeople);

      if (errors.length > 0) return errors;

      return await newPeople.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllPeople = async () => {
    try {
      const allPeople = await People.find({
        relations: {
          classrooms: true,
        },
      });

      return allPeople;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getOnePerson = async (userId: string) => {
    try {
      const onePerson = await People.find({
        relations: {
          classrooms: true,
        },
        where: {
          id: parseInt(userId, 10),
        },
      });

      return onePerson;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static updateOnePerson = async (userId: string, userRequest: any) => {
    try {
      const findOne = await People.findOneBy({ id: parseInt(userId, 10) });

      if (!findOne) return;

      const updateOnePerson = await People.merge(findOne, userRequest);
      const errors = await validate(updateOnePerson);

      if (errors.length > 0) return errors;

      return await updateOnePerson.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteOnePerson = async (userId: string) => {
    try {
      const deleteOne = await People.findOneBy({
        id: parseInt(userId, 10),
      });

      if (!deleteOne) return;

      return await deleteOne.remove();
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
