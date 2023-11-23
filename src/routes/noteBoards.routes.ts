import express, { Request, Response } from "express";

import frenchMark from "./frenchMark.routes";
import mathMark from "./mathMark.routes";
import scienceMark from "./scienceMark.routes";

const router = express.Router();

router.use("/frenchmark", frenchMark);
router.use("/mathmark", mathMark);
router.use("/sciencemark", scienceMark);

export default router;
