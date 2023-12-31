import express, { Request, Response } from "express";

import classroomServices from "../services/classrooms";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newClassroom = await classroomServices.createClassroom(req.body);

    if (Array.isArray(newClassroom)) return res.status(422).send(newClassroom);

    res.status(200).send(newClassroom);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const allClassroom = await classroomServices.getAllClassrooms();

    res.status(200).send(allClassroom);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const oneClassroom: any = await classroomServices.getOneClassroom(
      req.params.id
    );

    if (oneClassroom?.length === 0)
      return res.status(404).send("Classroom not found");

    res.status(200).send(oneClassroom);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deleteOneClassroom = await classroomServices.deleteOneClassroom(
      req.params.id
    );

    if (!deleteOneClassroom) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
