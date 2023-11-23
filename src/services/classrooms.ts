import Classroom from "../database/entities/Classroom";

export default class classroomServices {
  static createClassroom = async (userRequest: any, res: any) => {
    try {
      const newClassroom = await Classroom.create(userRequest);

      return await newClassroom.save();
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  };

  static getAllClassrooms = async (res: any) => {
    try {
      const allClassroom = await Classroom.find({
        relations: {
          peoples: true,
        },
      });

      return allClassroom;
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  };

  static deleteOneClassroom = async (userRequest: any, res: any) => {
    try {
      const deleteOne = await Classroom.findOneBy({
        id: parseInt(userRequest, 10),
      });

      if (!deleteOne) return;

      return await deleteOne.remove();
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  };
}
