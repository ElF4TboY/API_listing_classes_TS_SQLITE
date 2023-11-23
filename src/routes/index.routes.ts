import express from "express";

import classrooms from "./classrooms.routes";
import peoples from "./peoples.routes";
import noteBoards from "./noteBoards.routes";
import status from "./status.routes";

const router = express.Router();

router.use("/classrooms", classrooms);
router.use("/peoples", peoples);
router.use("/noteboards", noteBoards);
router.use("/status", status);

export default router;
