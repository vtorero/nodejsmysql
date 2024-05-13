import app from './app.js';
import { PORT,DB_HOST,DB_DATABASE,DB_USER,DB_PASSWORD,DB_PORT } from './config.js';

app.listen(PORT);
console.log("Servidor ejecutando en...",PORT)
console.log("DB_HOST",DB_HOST)
console.log("DB_DATABASE",DB_DATABASE)
console.log("DB_USER",DB_USER)
console.log("DB_PASSWORD",DB_PASSWORD)
console.log("DB_PORT",DB_PORT)





