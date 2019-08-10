"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {userRoutes} from "./../routes/userRoutes";
// import {UserController} from "./../controller/userController";
// import {AuthenticateService} from './../middleware/authenticate'
//let userControllerObj = new UserController();
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "success": "Server is running" });
        });
        // app.post('/register', userControllerObj.createUser);
        // app.post('/login',userControllerObj.login);
        // app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        // app.use('/user',userRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
