import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  NODE_ENV: string | undefined;
  SESSION_SECRET: string | undefined;
  JWT_SECRET: string | undefined;
  MYSQL_HOST: string | undefined;
  MYSQL_USER: string | undefined;
  MYSQL_PASSWORD: string | undefined;
  MYSQL_PORT: number | undefined;
  MYSQL_DATABASE: string | undefined;
  API_HOST: string | undefined;
  API_PORT: number | undefined;
  FRONT_HOST: string | undefined;
  FRONT_PORT: number | undefined;
}

interface Config {
  NODE_ENV: string;
  SESSION_SECRET: string;
  JWT_SECRET: string;
  MYSQL_HOST: string;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  MYSQL_PORT: number;
  MYSQL_DATABASE: string;
  API_HOST: string;
  API_PORT: number;
  FRONT_HOST: string;
  FRONT_PORT: number;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
    SESSION_SECRET: process.env.SESSION_SECRET ? process.env.SESSION_SECRET : "secret",
    JWT_SECRET: process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret",
    MYSQL_HOST: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : "localhost",
    MYSQL_USER: process.env.MYSQL_USER ? process.env.MYSQL_USER : "root",
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : "root",
    MYSQL_PORT: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : "db",
    API_HOST: process.env.API_HOST ? process.env.API_HOST : "localhost",
    API_PORT: process.env.API_PORT ? parseInt(process.env.API_PORT) : 4000,
    FRONT_HOST: process.env.FRONT_HOST ? process.env.FRONT_HOST : "localhost",
    FRONT_PORT: process.env.FRONT_PORT ? parseInt(process.env.FRONT_PORT) : 3000
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

// function to print the config variables as a JSON object

export const printConfig = (config: Config) => {
  console.log("Environment variables loaded :");
  console.log(config);
}

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;