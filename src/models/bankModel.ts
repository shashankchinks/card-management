import mongoose, { Types } from "mongoose";

const bankSchema = new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    active: {type:Boolean},
    createdDate: {type:Date, default: Date.now},    
    updatedDate: {type:Date}
});

const cardSchema = new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    type: String,
    // bank: {type:Types.ObjectId, ref:'bank'},
    // user: {type:Types.ObjectId, ref:'user'}
});

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    mobile: {type: String},
    active: Boolean,
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date}
});

export const bankModel = mongoose.model('Bank',bankSchema);
export const cardModel = mongoose.model('Card',cardSchema);
export const userModel = mongoose.model('User',userSchema);