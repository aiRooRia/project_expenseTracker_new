// import { Router } from "express";
// import { getAllUsers } from "../controller/users.js";
// const user = Router();
// user.route("/".length(getAllUsers));
// export { user };
import { Router } from "express";
import { getAllUsers, addUsers, loginUser } from "../controller/users.js";

const user = Router();
user.route("/").get(getAllUsers);
user.route("/").post(loginUser);

user.route("/login").post(loginUser);
export { user };
