import express from "express";
import {cardModel} from "./../models/bankModel";
export class CardService{
    public static async getAllCard(req: express.Request, res: express.Response){
        try{
            let allCards = await cardModel.find().populate('bank').populate('user').exec();
            return allCards;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getCardById(req: express.Request, res: express.Response){
        try{
            let getCard = await cardModel.findById(req.params.id).exec();
            return getCard;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateCardById(req:express.Request, res:express.Response){
        try {
            let updateCardById:any = await cardModel.findById(req.params.id).exec();
            updateCardById.name = req.body.name;
            updateCardById.type = req.body.type;
            await updateCardById.save();
            return updateCardById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createCard(req:express.Request, res:express.Response){
        try{
            let createCard = new cardModel(req.body);
            await createCard.save();
            return createCard;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}