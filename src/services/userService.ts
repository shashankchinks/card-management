import express from "express";
import {userModel} from "./../models/bankModel";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
            let updateUserById: any = await userModel.findById(req.params.id).exec();
            console.log(updateUserById);
            updateUserById.name = req.body.name;
            updateUserById.mobile = req.body.mobile;
            updateUserById.active = req.body.active;
            await updateUserById.save();
            return updateUserById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createUser(req:express.Request, res:express.Response){
        try{
            let encyptPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = encyptPassword;
            let createUser = new userModel(req.body);
            await createUser.save();
            return createUser;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    public static async login(req: express.Request, res: express.Response){
        try {
            //Check use exist -> by email
            let user:any = await userModel.findOne({"email":req.body.email}).exec();
            console.log(user);
            if(user){
                //Check password match or not
                let passwordMatched = await bcrypt.compare(req.body.password, user.password);
                if(passwordMatched){
                    let options:jwt.SignOptions = {
                        //by default it has behaviour of 365 days
                        //365d => 365 days
                        //12h => 12 hours
                        expiresIn : "365d"
                    };

                    //what exactly information we want to put in payload
                    let payload = {
                        "email" : user.email,
                        "name" : user.name
                    }

                    let token = await jwt.sign(payload,"secretkey",options);
                    return {"token" : token} ;
                    // "login success";
                }
                else{
                    return "Password Incorrect";
                }
            }else{
                return "user not registered by email";
            }
            // let userLogin = await userModel.findOne({"email":req.body.email, "password":req.body.password}).exec();
            // return userLogin;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}