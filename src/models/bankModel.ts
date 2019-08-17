import mongoose, { Types } from "mongoose";
import {SchemaTypes} from "mongoose";

const bankSchema = new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    active: {type:Boolean},
    createdDate: {type:Date, default: Date.now},    
    updatedDate: {type:Date}
});

const cardSchema = new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    type: String,
    createdDate: {type:Date, default: Date.now},
    bank: {type:SchemaTypes.ObjectId, ref:'Bank'}, //created foriegn key
    user: {type:SchemaTypes.ObjectId, ref:'User'} //created foriegn key
});

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    mobile: {type: String},
    active: Boolean,
    myCards: [{type: mongoose.SchemaTypes.ObjectId, ref:"Card"}],
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date}
});

export const bankModel = mongoose.model('Bank',bankSchema);
export const cardModel = mongoose.model('Card',cardSchema);
export const userModel = mongoose.model('User',userSchema);