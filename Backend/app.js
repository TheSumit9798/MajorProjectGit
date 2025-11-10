import express from 'express';
import { config } from "dotenv";
config({ path: "./config/config.env" });
import { dbConnection } from './database/dbConnetion.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
// Importing the cors middleware for handling Cross-Origin Resource Sharing  basically use to add fontend and backend
import messageRouter from './router/messageRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
// Importing the error middleware for handling errors in the application
import userRouter from './router/userRouter.js';
import appointmentRouter from './router/appointmentRouter.js';
const app = express();
app.use(express.json());
app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());
// Using the cookieParser middleware to parse cookies attached to the client request object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Using the express.json() middleware to parse incoming JSON requests
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
// Using the userRouter for handling user-related routes
app.use('/api/v1/appointment', appointmentRouter);
dbConnection();
app.get('/ping', (req, res) => {
  res.send('pong');
});
app.use(errorMiddleware);
// Using the error middleware to handle errors in the application
export default app;