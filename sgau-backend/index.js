import express from "express";
import cors from "cors";
import "dotenv/config";

import createUserRouter from "./routes/createUser.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", createUserRouter);
app.use("/api", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
