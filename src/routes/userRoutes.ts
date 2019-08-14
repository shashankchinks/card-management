import { Router } from "express";
import { UserController } from "./../controllers/userController";

let userControllerObj = new UserController();

export const userRoutes: Router = Router();

userRoutes.get('/',userControllerObj.getAllUser);
userRoutes.get('/getUserById/:id',userControllerObj.getUserById);
userRoutes.put('/updateUserById/:id',userControllerObj.updateUserById);
// userRoutes.post('/createUser',userControllerObj.createUser);
