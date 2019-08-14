"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bankModel_1 = require("./../models/bankModel");
var jwt = __importStar(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.getAllUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var allUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, bankModel_1.userModel.find().exec()];
                    case 1:
                        allUser = _a.sent();
                        return [2 /*return*/, allUser];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, err_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.getUserById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getUser, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, bankModel_1.userModel.findById(req.params.id).exec()];
                    case 1:
                        getUser = _a.sent();
                        return [2 /*return*/, getUser];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [2 /*return*/, err_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.updateUserById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var updateUserById, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, bankModel_1.userModel.findById(req.params.id).exec()];
                    case 1:
                        updateUserById = _a.sent();
                        updateUserById.name = req.body.name;
                        updateUserById.type = req.body.type;
                        return [4 /*yield*/, updateUserById.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, updateUserById];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [2 /*return*/, err_3];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var createUser, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        createUser = new bankModel_1.userModel(req.body);
                        return [4 /*yield*/, createUser.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, createUser];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [2 /*return*/, err_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, passwordMatched, options, payload, token, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, bankModel_1.userModel.findOne({ "email": req.body.email }).exec()];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 6];
                        return [4 /*yield*/, bcrypt_1.default.compare(req.body.password, user.password)];
                    case 2:
                        passwordMatched = _a.sent();
                        if (!passwordMatched) return [3 /*break*/, 4];
                        options = {
                            //by default it has behaviour of 365 days
                            //365d => 365 days
                            //12h => 12 hours
                            expiresIn: "365d"
                        };
                        payload = {
                            "email": user.email,
                            "name": user.name
                        };
                        return [4 /*yield*/, jwt.sign(payload, "secretkey", options)];
                    case 3:
                        token = _a.sent();
                        return [2 /*return*/, { "token": token }];
                    case 4: return [2 /*return*/, "Password Incorrect"];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, "user not registered by email"];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_5 = _a.sent();
                        console.log(err_5);
                        return [2 /*return*/, err_5];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
