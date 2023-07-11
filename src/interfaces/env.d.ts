declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string = 'development' | 'production';
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
  }
}
