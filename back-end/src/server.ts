import express, { Express, NextFunction, Request, RequestHandler, Response } from "express";
import morgan from "morgan";
import router from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Express = express();

app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.use("/", router);

app.use((req, res, next) => {
  next(new Error("Not found page"));
});
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  const message = err.messageObject || err.message;
  const statusCode = err?.status ?? 400;
  const error = {
    status: "error",
    error: message,
  };

  return res.status(statusCode).json(error);
});

export default app;
