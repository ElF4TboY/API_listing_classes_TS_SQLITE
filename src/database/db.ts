import { DataSource } from "typeorm";

import Classroom from "./entities/Classroom";
import People from "./entities/People";
import Status from "./entities/Status";
import French from "./entities/FrenchMark";
import Math from "./entities/MathMark";
import Science from "./entities/ScienceMark";

const connectDb = new DataSource({
  type: "sqlite",
  database: "listing_classes.sqlite",
  entities: [Classroom, People, Status, French, Math, Science],
  synchronize: true,
});

connectDb
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDb;
