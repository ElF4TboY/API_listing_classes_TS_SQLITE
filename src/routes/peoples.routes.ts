import express, { Request, Response } from "express";

import peopleServices from "../services/people";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newPeople = await peopleServices.createPeople(req.body);

    if (Array.isArray(newPeople)) return res.status(422).send(newPeople);

    res.status(200).send(newPeople);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const allPeople = await peopleServices.getAllPeople();

    res.status(200).send(allPeople);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const onePerson: any = await peopleServices.getOnePerson(req.params.id);

    if (onePerson?.length === 0)
      return res.status(404).send("Student not found");

    res.status(200).send(onePerson);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const updateOnePerson = await peopleServices.updateOnePerson(
      req.params.id,
      req.body
    );

    if (!updateOnePerson) return res.sendStatus(404);
    if (Array.isArray(updateOnePerson))
      return res.status(422).send(updateOnePerson);

    res.status(200).send(updateOnePerson);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deleteOneClassroom = await peopleServices.deleteOnePerson(
      req.params.id
    );

    if (!deleteOneClassroom) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
