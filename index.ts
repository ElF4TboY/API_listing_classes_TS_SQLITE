import "reflect-metadata";
import express from "express";

import connectDb from "./src/database/db";
import routing from "./src/routes/index.routes";

const app = express();
const port = 3000;

connectDb;

app.use(express.json());

app.use(routing);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
