import express, { json } from "express";

import technologies_route from "./routes/technologies.routes";

const app = express();

/* Middlewares */
app.use(json());

/* Settings */
app.set("port", process.env.PORT || 3000);

/* Routes */
app.use(technologies_route);

export default app;
