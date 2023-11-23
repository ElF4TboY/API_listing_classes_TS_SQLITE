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

export default router;
