import express, { Request, Response } from "express";
import { validate } from "class-validator";

import peopleServices from "../services/people";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newPeople = await peopleServices.createPeople(req.body);
    const errors = await validate(newPeople);

    if (errors.length > 0) return res.status(422).send({ errors });

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
    const onePerson = await peopleServices.getOnePerson(req.params.id);

    if (!onePerson) return res.status(404).send("Student not found");

    res.status(200).send(onePerson);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const findOnePerson = await peopleServices.getOnePerson(req.params.id);

    if (!findOnePerson) return res.status(404).send("Student not found");

    const updateOnePerson = await peopleServices.updateOnePerson(
      findOnePerson,
      req.body
    );
    const errors = await validate(updateOnePerson);

    if (errors.length > 0) return res.status(422).send({ errors });

    res.status(200).send(updateOnePerson);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const findOnePersone = await peopleServices.getOnePerson(req.params.id);

    if (!findOnePersone) return res.status(404).send("Student not found");

    const deleteOnePerson = await peopleServices.deleteOnePerson(
      findOnePersone
    );

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
