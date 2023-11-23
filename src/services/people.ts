import People from "../database/entities/People";

export default class peopleServices {
  static createPeople = async (userRequest: any) => {
    try {
      const newPeople = await People.create(userRequest);

      return await newPeople.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllPeople = async () => {
    try {
      const allPeople = await People.find();

      return allPeople;
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
