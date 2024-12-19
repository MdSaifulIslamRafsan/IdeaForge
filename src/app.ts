import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import NotFoundPage from './app/middelware/NotFoundPage';
const app : Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req : Request , res : Response) => {
  res.send("Welcome to my Express server!🚀")
})

app.use(NotFoundPage)


export default app;
