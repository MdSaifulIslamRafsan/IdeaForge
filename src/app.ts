import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import NotFoundPage from './app/middleware/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalError';
const app : Application = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api', router)


app.get('/', (req : Request , res : Response) => {
  res.send("Welcome to my Express server!🚀")
})

app.use(NotFoundPage);
app.use(globalErrorHandler)



export default app;
