import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
       dbName:"MERN_STACK_HOSPITAL_MANAGEMENT_SYSYTEM"
    }).then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((error) => {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    });
}