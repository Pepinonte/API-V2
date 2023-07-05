import dotenv from "dotenv";
import fs from "fs";

// Fonction pour charger les variables d'environnement à partir d'un fichier .env
function loadEnvFromFile(filePath: string, allowedVariables: string[]): void {
  if (fs.existsSync(filePath)) {
    const envConfig = dotenv.parse(fs.readFileSync(filePath));
    for (const key of Object.keys(envConfig)) {
      if (allowedVariables.includes(key)) {
        process.env[key] = envConfig[key];
      }
    }
  }
}

// Fonction pour récupérer une variable d'environnement avec une valeur par défaut
function getEnvVariable(key: string, defaultValue: string): string {
  const value = process.env[key] || defaultValue;
  return value;
}

// Liste des variables autorisées
const allowedVariables = [
  "MYSQL_HOST",
  "MYSQL_USER",
  "MYSQL_PASSWORD",
  "MYSQL_PORT",
  "MYSQL_DATABASE",
  "API_HOST",
  "API_PORT",
];

// Charger les variables d'environnement à partir d'un fichier .env
loadEnvFromFile("./.env", allowedVariables);

// Exemple d'utilisation pour récupérer les variables d'environnement
const config = {
  MYSQL_HOST: getEnvVariable("MYSQL_HOST", "localhost"),
  MYSQL_USER: getEnvVariable("MYSQL_USER", "root"),
  MYSQL_PASSWORD: getEnvVariable("MYSQL_PASSWORD", "root"),
  MYSQL_PORT: getEnvVariable("MYSQL_PORT", "3306"),
  MYSQL_DATABASE: getEnvVariable("MYSQL_DATABASE", "db"),
  API_HOST: getEnvVariable("API_HOST", "localhost"),
  API_PORT: getEnvVariable("API_PORT", "4000"),
};

// Exporter les variables d'environnement pour pouvoir les utiliser ailleurs
export default config;
