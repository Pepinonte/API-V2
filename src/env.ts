import * as dotenv from "dotenv";

export function loadEnvFromFile(filePath: string, allowedVariables: { [key: string]: string | number }): { [key: string]: string } {
  console.log(`Loading environment variables from src${filePath} or from process.env otherwise from default values set in src/allowedVariables.ts`);
  dotenv.config({ path: __dirname+filePath });
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

export function printEnvVariables(allowedVariables: { [key: string]: string | number }) {
  console.log("Variables d'environnement chargées :");
  const myenv = {};
  // Print to oject format with key and value
  for (const variable in allowedVariables) {
    myenv[variable] = process.env[variable];
  }
  console.log(myenv);
}