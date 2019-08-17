"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("./../routes/userRoutes");
var cardRoutes_1 = require("./../routes/cardRoutes");
var bankRoutes_1 = require("./../routes/bankRoutes");
var userController_1 = require("./../controllers/userController");
var authenticate_1 = require("./../middleware/authenticate");
var userControllerObj = new userController_1.UserController();
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "success": "Server is running" });
        });
        app.post('/register', userControllerObj.createUser);
        app.post('/login', userControllerObj.login);
        app.use(authenticate_1.AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        app.use('/user', userRoutes_1.userRoutes);
        app.use('/card', cardRoutes_1.cardRoutes);
        app.use('/bank', bankRoutes_1.bankRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
