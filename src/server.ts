import app from "./app";
import config from "./app/config";

const connectDB = async() => {
    try {
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
          });
          
    } catch (error) {
        console.error(error);
    }
}

connectDB(); 