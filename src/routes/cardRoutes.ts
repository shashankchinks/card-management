import { Router } from "express";
import { CardController } from "./../controllers/cardController";

let cardControllerObj = new CardController();

export const cardRoutes: Router = Router();

cardRoutes.get('/',cardControllerObj.getAllCard);
cardRoutes.get('/getCardById/:id',cardControllerObj.getCardById);
cardRoutes.put('/updateCardById/:id',cardControllerObj.updateCardById);
cardRoutes.post('/createCard',cardControllerObj.createCard);
