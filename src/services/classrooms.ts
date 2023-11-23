import Classroom from "../database/entities/Classroom";

export default class classroomServices {
  static createClassroom = async (userRequest: any) => {
    try {
      const newClassroom = await Classroom.create(userRequest);

      return await newClassroom.save();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getAllClassrooms = async () => {
    try {
      const allClassroom = await Classroom.find({
        relations: {
          peoples: true,
        },
      });

      return allClassroom;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static getOneClassroom = async (userId: string) => {
    try {
      const oneClassroom = await Classroom.find({
        relations: {
          peoples: true,
        },
        where: {
          id: parseInt(userId, 10),
        },
      });

      return oneClassroom;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  static deleteOneClassroom = async (userRequest: any) => {
    try {
      const deleteOne = await Classroom.findOneBy({
        id: parseInt(userRequest, 10),
      });

      if (!deleteOne) return;

      return await deleteOne.remove();
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
