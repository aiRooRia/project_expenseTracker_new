// import { Router } from "express";
// import { getAllUsers } from "../controller/users.js";
// const user = Router();
// user.route("/".length(getAllUsers));
// export { user };
import { Router } from "express";
import {
  getAllUsers,
  addUsers,
  signUp,
  loginUser,
} from "../controller/users.js";

const user = Router();
user.route("/").get(getAllUsers);
user.route("/").post(signUp);
user.route("/signup").post(addUsers);
user.route("/signin").post(signUp);
user.route("/login").post(loginUser);
export { user };
