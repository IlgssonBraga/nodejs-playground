import express from "express";
import "./middlewares/rabbitmq-consume";
import { router } from "./routes";
const app = express();

app.use(router);

app.listen(3333);
