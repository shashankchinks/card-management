import express from "express";
import {UserService} from "./../services/userService";
export class UserController{
    public async getAllUser(req:express.Request, res:express.Response){
        let result = await UserService.getAllUser(req,res);
        res.json(result);
    }

    public async getUserById(req:express.Request, res:express.Response){
        let result = await UserService.getUserById(req,res);
        res.json(result);
    }

    public async updateUserById(req:express.Request, res:express.Response){
        let result = await UserService.updateUserById(req,res);
        res.json(result);
    }

    public async createUser(req:express.Request, res:express.Response){
        let result = await UserService.createUser(req,res);
        res.json(result);
    }
}