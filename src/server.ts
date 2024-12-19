import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const connectDB = async() => {
    try { 
        await mongoose.connect(config.db_url as string);
        console.log("Database connected successfully!");  

        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
          });
          
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

connectDB(); 

process.on('uncaughtException', (error)=>{
    console.error('🚨 An uncaught error occurred:', error);
    process.exit(1);
})