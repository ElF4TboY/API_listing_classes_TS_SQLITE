import express, { Request, Response } from "express";
import { validate } from "class-validator";

import classroomServices from "../services/classrooms";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newClassroom = await classroomServices.createClassroom(req.body, res);
    const errors = await validate(newClassroom);

    if (errors.length > 0) return res.status(422).send({ errors });

    res.status(200).send(newClassroom);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const allClassroom = await classroomServices.getAllClassrooms(res);

    res.status(500).send(allClassroom);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deleteOneClassroom = await classroomServices.deleteOneClassroom(
      req.params.id,
      res
    );

    if (!deleteOneClassroom) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
