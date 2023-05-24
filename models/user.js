import { Schema, model } from "mongoose";

const user = new Schema({
    username:{
        type: String,
        required: true,
    },

    email:{
       type: String,
        required: true, 
    },

    password:{
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['student', 'professor', 'admin'],
        default: 'student',
        required: true
    }
},{timestamps:true});

export default model('user', user);
