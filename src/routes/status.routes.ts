import express, { Request, Response } from "express";

import statusServices from "../services/status";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newStatus = await statusServices.createStatus(req.body);

    if (Array.isArray(newStatus)) {
      res.status(422).send(newStatus);
    } else {
      res.status(200).send(newStatus);
    }
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const allStatus = await statusServices.getAllStatus();

    res.status(200).send(allStatus);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default router;
