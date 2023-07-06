import express, { Application } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";

//Environment variables
import { loadEnvFromFile, env, printEnvVariables } from "./env";
loadEnvFromFile();

//Database
import db from "./database";

// Middlewares

//Routes
import itemGetRoutes from "./routes/item/get.routes";
import itemPostRoutes from "./routes/item/post.routes";
import itemPutRoutes from "./routes/item/put.routes";
import itemDeleteRoutes from "./routes/item/delete.routes";
import userGetRoutes from "./routes/user/get.routes";
import userDeleteRoutes from "./routes/user/delete.routes";
import userPostRoutes from "./routes/user/post.routes";
import userPutRoutes from "./routes/user/put.routes";
import sessionMiddleware from "@middlewares/session";
export class App {
  private app: Application;
  private api_host: string;
  private api_port: number;
  private front_host: string;
  private front_port: number;
  private allowedOrigins: string[];

  constructor() {
    this.api_host = env("API_HOST");
    this.api_port = Number(env("API_PORT"));
    this.front_host = env("FRONT_HOST");
    this.front_port = Number(env("FRONT_PORT"));
    this.allowedOrigins = [`http://${this.front_host}:${this.front_port}`];
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  private settings() {
    this.app.set("api_port", this.api_port);
    this.app.set("api_host", this.api_host);
    if (env("NODE_ENV") === "production") {
      this.app.set("trust proxy", 1);
    }
    if (env("NODE_ENV") === "development") {
      printEnvVariables();
    }
  }

  private middlewares() {
    if (env("NODE_ENV") === "production") {
      this.app.use(morgan("combined"));
    }
    if (env("NODE_ENV") === "development") {
      this.app.use(morgan("dev"));
    }
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(session({
      secret: env("SESSION_SECRET"),
      resave: false,
      saveUninitialized: true,
      proxy: env("NODE_ENV") === 'production' ? true : false,
      cookie: { secure: env("NODE_ENV") === 'production' ? true : false,
      maxAge: 60000,
      sameSite: env("NODE_ENV") === 'production' ? 'none' : 'lax',
      domain: env("NODE_ENV") === 'production' ? this.front_host : undefined }
    }))
    this.app.use(sessionMiddleware)
    this.app.use((req, res, next) => {
      res.append("Access-Control-Allow-Origin", this.allowedOrigins);
      res.append('Access-Control-Allow-Credentials', 'true');
      res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
  });
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
        console.log(
          "Connection at the database has been established successfully.",
        );
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
