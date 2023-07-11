import express, { Application } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";

//Environment variables
import config, { printConfig } from "./env";

//Database
import db from "./database";

// Middlewares

//Routes
//import item routes
import itemGetRoutes from "./routes/item/get.routes";
import itemPostRoutes from "./routes/item/post.routes";
import itemPutRoutes from "./routes/item/put.routes";
import itemDeleteRoutes from "./routes/item/delete.routes";
//import user routes
import userGetRoutes from "./routes/user/get.routes";
import userDeleteRoutes from "./routes/user/delete.routes";
import userPostRoutes from "./routes/user/post.routes";
import userPutRoutes from "./routes/user/put.routes";
//import news routes
import newsGetRoutes from "./routes/news/get.routes";
import newsPostRoutes from "./routes/news/post.routes";
import newsPutRoutes from "./routes/news/put.routes";
import newsDeleteRoutes from "./routes/news/delete.routes";

export class App {
  private node_env: string;
  private session_secret: string;
  private app: Application;
  private api_host: string;
  private api_port: number;
  private front_host: string;
  private front_port: number;
  private allowedOrigins: string[];

  constructor() {
    this.session_secret = config.SESSION_SECRET;
    this.node_env = config.NODE_ENV;
    this.api_host = config.API_HOST;
    this.api_port = config.API_PORT;
    this.front_host = config.FRONT_HOST;
    this.front_port = config.FRONT_PORT;
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
    if (this.node_env === "production") {
      this.app.set("trust proxy", 1);
    }
    if (this.node_env === "development") {
      printConfig(config);
    }
  }

  private middlewares() {
    if (this.node_env === "production") {
      this.app.use(morgan("combined"));
    }
    if (this.node_env === "development") {
      this.app.use(morgan("dev"));
    }
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(
      session({
        secret: this.session_secret,
        resave: false,
        saveUninitialized: true,
        proxy: this.node_env === "production" ? true : false,
        cookie: {
          secure: this.node_env === "production" ? true : false,
          maxAge: 60000,
          sameSite: this.node_env === "production" ? "none" : "lax",
          domain: this.node_env === "production" ? this.front_host : undefined,
        },
      }),
    );
    // this.app.use(sessionMiddleware);
    this.app.use((req, res, next) => {
      res.append("Access-Control-Allow-Origin", this.allowedOrigins);
      res.append("Access-Control-Allow-Credentials", "true");
      res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
      next();
    });
  }

  private routes() {
    // item routes
    this.app.use(itemGetRoutes);
    this.app.use(itemPostRoutes);
    this.app.use(itemPutRoutes);
    this.app.use(itemDeleteRoutes);
    // user routes
    this.app.use(userGetRoutes);
    this.app.use(userDeleteRoutes);
    this.app.use(userPostRoutes);
    this.app.use(userPutRoutes);
    // news routes
    this.app.use(newsGetRoutes);
    this.app.use(newsPostRoutes);
    this.app.use(newsPutRoutes);
    this.app.use(newsDeleteRoutes);
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
