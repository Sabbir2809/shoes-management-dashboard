import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes/router";

// express app instance
const app: Application = express();

// application middleware
app.use(express.json());
app.use(cors({ origin: "https://shoes-inventory.netlify.app", credentials: true }));
app.use(cookieParser());

// application routes
app.use("/api/v1", router);

// health checking
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Shoes Management Dashboard Server",
  });
});

// error handling
app.use(globalErrorHandler);
// catch all routes
app.use(notFound);

export default app;
