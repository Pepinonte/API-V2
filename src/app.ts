import express, { Application } from "express";
import morgan from "morgan";

//Routes
import GetRoutes from "./routes/item/get.routes";
import PostRoutes from "./routes/item/post.routes";
import PutRoutes from "./routes/item/put.routes";
import DeleteRoutes from "./routes/item/delete.routes";
import UserGetRoutes from "./routes/user/get.routes";

//Database
import db from "./database";

export class App {
  private app: Application;
  private port: number | string | undefined;

  constructor(port?: number | string) {
    this.port = port;
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(GetRoutes);
    this.app.use(PostRoutes);
    this.app.use(PutRoutes);
    this.app.use(DeleteRoutes);
    this.app.use(UserGetRoutes);
  }

  private async connectDB(): Promise<void> {
    await db
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }

  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log(`Server is listening on port ${this.app.get("port")}`);
  }
}
