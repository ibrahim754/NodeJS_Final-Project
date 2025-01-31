import { Schema, model } from "mongoose";

const subject = new Schema({
    name:{
        type: String,
        required: true,
    },

    code:{
       type: String,
        required: false, 
    },

    department:{
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'department'
    },

    previous:{
        type: Schema.Types.ObjectId,
        required: false,
    }
});

export default model('subject', subject);
