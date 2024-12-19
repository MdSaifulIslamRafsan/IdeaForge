import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Server } from 'http';

let server: Server;

const connectDB = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('Database connected successfully!');

    server = app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

connectDB();

process.on('unhandledRejection', async (error) => {
  console.error('🚨 Unhandled Rejection at:', error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('🚨 An uncaught error occurred:', error);
  process.exit(1);
});
