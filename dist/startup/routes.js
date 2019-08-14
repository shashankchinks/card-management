"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {userRoutes} from "./../routes/userRoutes";
var userController_1 = require("./../controllers/userController");
// import {AuthenticateService} from './../middleware/authenticate'
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
        // app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        // app.use('/user',userRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
