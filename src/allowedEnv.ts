const allowedVariables: { [key: string]: string | number } = {
  JWT_TOKEN: "secret",
  MYSQL_HOST: "localhost",
  MYSQL_USER: "root",
  MYSQL_PASSWORD: "root",
  MYSQL_PORT: 3306,
  MYSQL_DATABASE: "db",
  API_HOST: "localhost",
  API_PORT: 4000,
};

export default allowedVariables;
