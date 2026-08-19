import express from "express";
import cors from "cors";
import { authRoute } from "./routes.js";

const APP = express();

APP.use(cors());
APP.use(express.json());

authRoute(APP);

APP.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});