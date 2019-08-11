import express from "express";
import {CardService} from "./../services/cardService";
export class CardController{
    public async getAllCard(req:express.Request, res:express.Response){
        let result = await CardService.getAllCard(req,res);
        res.json(result);
    }

    public async getCardById(req:express.Request, res:express.Response){
        let result = await CardService.getCardById(req,res);
        res.json(result);
    }

    public async updateCardById(req:express.Request, res:express.Response){
        let result = await CardService.updateCardById(req,res);
        res.json(result);
    }

    public async createCard(req:express.Request, res:express.Response){
        let result = await CardService.createCard(req,res);
        res.json(result);
    }
}