import express from "express";
import {userModel} from "./../models/bankModel";
export class UserService{
    public static async getAllUser(req: express.Request, res: express.Response){
        try{
            let allUser = await userModel.find().exec();
            return allUser;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getUserById(req: express.Request, res: express.Response){
        try{
            let getUser = await userModel.findById(req.params.id).exec();
            return getUser;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateUserById(req:express.Request, res:express.Response){
        try {
            let updateUserById:any = await userModel.findById(req.params.id).exec();
            updateUserById.name = req.body.name;
            updateUserById.type = req.body.type;
            await updateUserById.save();
            return updateUserById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createUser(req:express.Request, res:express.Response){
        try{
            let createUser = new userModel(req.body);
            await createUser.save();
            return createUser;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}