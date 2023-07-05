import express, { Application } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Database
import db from "./database";

//Routes
import itemGetRoutes from "./routes/item/get.routes";
import itemPostRoutes from "./routes/item/post.routes";
import itemPutRoutes from "./routes/item/put.routes";
import itemDeleteRoutes from "./routes/item/delete.routes";
import userGetRoutes from "./routes/user/get.routes";
import userDeleteRoutes from "./routes/user/delete.routes";
import userPostRoutes from "./routes/user/post.routes";
import userPutRoutes from "./routes/user/put.routes";
export class App {
  private app: Application;
  private api_host: string | undefined;
  private api_port: number | undefined;

  constructor() {
    this.api_host = process.env.API_HOST;
    this.api_port = Number(process.env.API_PORT);
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  private settings() {
    this.app.set("api_port", this.api_port);
    this.app.set("api_host", this.api_host);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  private routes() {
    this.app.use(itemGetRoutes);
    this.app.use(itemPostRoutes);
    this.app.use(itemPutRoutes);
    this.app.use(itemDeleteRoutes);
    this.app.use(userGetRoutes);
    this.app.use(userDeleteRoutes);
    this.app.use(userPostRoutes);
    this.app.use(userPutRoutes);
  }

  private async connectDB(): Promise<void> {
    await db
      .authenticate()
      .then(() => {
        console.log("Connection at the database has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }

  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("api_port"), this.app.get("api_host"));
    console.log(
      `Server hosted at ${this.app.get(
        "api_host",
      )} and listening on port ${this.app.get("api_port")}`,
    );
  }
}
