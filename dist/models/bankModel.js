"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var bankSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    active: { type: Boolean },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date }
});
var cardSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    type: String,
    createdDate: { type: Date, default: Date.now },
    bank: { type: mongoose_2.SchemaTypes.ObjectId, ref: 'Bank' },
    user: { type: mongoose_2.SchemaTypes.ObjectId, ref: 'User' } //created foriegn key
});
var userSchema = new mongoose_1.default.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String },
    active: Boolean,
    myCards: [{ type: mongoose_1.default.SchemaTypes.ObjectId, ref: "Card" }],
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date }
});
exports.bankModel = mongoose_1.default.model('Bank', bankSchema);
exports.cardModel = mongoose_1.default.model('Card', cardSchema);
exports.userModel = mongoose_1.default.model('User', userSchema);
