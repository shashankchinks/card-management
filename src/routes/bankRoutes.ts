import { Router } from "express";
import { CardController } from "./../controllers/cardController";
import { BankController } from "./../controllers/bankController";

let cardControllerObj = new CardController();
let bankControllerObj = new BankController();

export const cardRoutes: Router = Router();
export const bankRoutes: Router = Router();

cardRoutes.get('/',cardControllerObj.getAllCard);
cardRoutes.get('/getCardById/:id',cardControllerObj.getCardById);
cardRoutes.put('/updateCardById/:id',cardControllerObj.updateCardById);
cardRoutes.post('/createCard',cardControllerObj.createCard);

bankRoutes.get('/',bankControllerObj.getAllBank);
bankRoutes.get('/getCardById/:id',bankControllerObj.getBankById);
bankRoutes.put('/updateCardById/:id',bankControllerObj.updateBankById);
bankRoutes.post('/createCard',bankControllerObj.createBank);