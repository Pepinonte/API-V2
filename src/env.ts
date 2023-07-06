import * as dotenv from "dotenv";

const FilePath = "/.env";
const AllowedVariables: { [key: string]: string | number } = {
  NODE_ENV: "development",
  SESSION_SECRET: "secret",
  JWT_SECRET: "secret",
  MYSQL_HOST: "localhost",
  MYSQL_USER: "root",
  MYSQL_PASSWORD: "root",
  MYSQL_PORT: 3306,
  MYSQL_DATABASE: "db",
  API_HOST: "localhost",
  API_PORT: 4000,
  FRONT_HOST: "localhost",
  FRONT_PORT: 3000,
};

export function loadEnvFromFile(
  filePath: string = FilePath,
  allowedVariables: { [key: string]: string | number } = AllowedVariables,
): { [key: string]: string } {
  dotenv.config({ path: __dirname + filePath });
  const myenv = {};
  for (const variable in allowedVariables) {
    if (!process.env[variable]) {
      process.env[variable] = allowedVariables[variable].toString();
    }
  }
  for (const variable in allowedVariables) {
    myenv[variable] = process.env[variable];
  }
  return myenv;
}

export function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }

  return value;
}
export function printEnvVariables(
  allowedVariables: {
    [key: string]: string | number;
  } = AllowedVariables,
) {
  console.log("Environment variables loaded :");
  const myenv = {};
  for (const variable in allowedVariables) {
    myenv[variable] = process.env[variable];
  }
  console.log(myenv);
}

export default loadEnvFromFile;
