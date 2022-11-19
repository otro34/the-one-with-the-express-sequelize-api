import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import coursesRoutes from './src/routes/courses.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/courses", coursesRoutes);

export default app