import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

import bodyParser from 'body-parser';
import { generateResponse } from "./controllers/index.js";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/generate", generateResponse);

app.get("/generate", (req, res) => {
  res.send(history);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
