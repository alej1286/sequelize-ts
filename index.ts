
import express from "express";
const app = express();
import db from "./models";
const port = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listtening on port ${port}`);
  });
});
