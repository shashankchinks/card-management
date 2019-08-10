"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bankSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    active: { type: Boolean },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date }
});
exports.userModel = mongoose_1.default.model('bank', bankSchema);
