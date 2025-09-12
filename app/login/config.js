import { config } from "dotenv";



config(); // carga el .env

const conf = {
  SECRET: process.env.SECRET_KEY || "SECRETO"
};

export default conf;


