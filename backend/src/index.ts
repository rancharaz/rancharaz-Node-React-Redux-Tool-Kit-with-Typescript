import mongoose from 'mongoose'
import {app} from './app'

const port:string | undefined = process.env.PORT;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Connected to db");
        app.listen(port, () => console.log("Server running on port:", port));
    } catch (error) {
        console.log("Failed to conntect to the DB");
        console.log(error)
    }
}
startServer()