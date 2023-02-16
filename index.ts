import express from "express";
const app = express();
import db from "./models";
const port = process.env.PORT || 3000;
import { users } from "./seeders/users";
import { projects } from "./seeders/projects";
import { projectassignments } from "./seeders/projectassignments";

/* const createUsers = () => {
  users.map((user) => {
    db.User.create(user);
  });
};

createUsers();
 */

/* const createProjects = () => {
  projects.map((project) => {
    db.Project.create(project);
    
  });
}; 

createProjects();
*/

/* const createprojectassignments = () => {
  projectassignments.map((assigm) => {
    db.ProjectAssignment.create(assigm);
  });
};

createprojectassignments(); */

app.get("/", (req, res) => {
  db.User.findAll({
    include: {
      model: db.Project,
    },
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
