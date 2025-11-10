import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        minlength: [3, "Please enter your first name of atlest 3 lenght"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter your first name"],
        minlength: [3, "Please enter your last name of atlest 3 lenght"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        vaidate: [validator.isEmail, "Please enter a valid email"],
    },
    phone:{
        type: String,
        required: [true, "Please enter your phone number"],
        minlength: [11, "Please enter a valid phone number"],
        maxlength: [11, "Please enter a valid phone number"],
    },
    message: {
        type: String,
        required: [true, "Please enter your message"],
        minlength: [10, "Please enter a message of at least 10 characters"],
    }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;