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

  static updateOnePerson = async (user: any, userRequest: any) => {
    try {
      const updateOnePerson = await People.merge(user, userRequest);

      return await updateOnePerson?.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteOnePerson = async (userRequest: any) => {
    try {
      return await userRequest.remove();
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
