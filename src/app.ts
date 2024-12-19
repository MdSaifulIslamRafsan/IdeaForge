import express, { Application, Request, Response } from 'express'
import cors from 'cors';
const app : Application = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req : Request , res : Response) => {
  res.send("Welcome to my Express server!🚀")
})


export default app;
