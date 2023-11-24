import express, { Request, Response } from "express";

import frenchMarkServices from "../services/frenchMark";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const createOne = await frenchMarkServices.createFrenchBoard(req.body);

    if (Array.isArray(createOne)) return res.status(422).send(createOne);

    res.status(200).send(createOne);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const getAll = await frenchMarkServices.getAllFrenchBoard();

    res.status(200).send(getAll);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    await frenchMarkServices.deleteFrenchBoard();

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
