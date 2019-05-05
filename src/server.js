import express, { json } from "express";
import path from 'path';

import index_router from './routes/index.routes';
import technologies_router from "./routes/technologies.routes";

const app = express();

/* Middlewares */
app.use(json());

/* Settings */
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */
app.use(index_router);
app.use('/technologies', technologies_router);

export default app;
