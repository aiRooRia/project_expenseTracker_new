import express from "express";
import cors from "cors";
import { user } from "./src/router/users.js";

const app = express();
const port = 3033;
app.use(cors());
app.use(express.json());
app.use("/users", user);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
