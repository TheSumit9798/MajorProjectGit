import Message from '../models/messageSchema.js';
import { catchAsyncErrors } from '../middlewares/catchAsynErrors.js';
import ErrorHandler  from '../middlewares/errorMiddleware.js';
export const sendMessage = catchAsyncErrors(
  async (req, res,next) => {
    const { firstName,lastName,phone,email, message } = req.body;
    if (!firstName || !lastName || !phone || !email || !message) {
      return next(new ErrorHandler('Please fill all the fields', 400));    
    }
    await  Message.create({firstName,lastName,phone,email, message});
    res.status(200).json({ message: 'Message sent successfully' });   
}
)

export const getAllMessages = catchAsyncErrors(
  async (req, res,next) => {
    const messages = await Message.find();
    if (!messages || messages.length === 0) {
      return next(new ErrorHandler('No messages found', 404));
    }
    res.status(200).json({ 
      success: true,
      messages });
  });
