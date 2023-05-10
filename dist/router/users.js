"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
exports.default = (router) => {
    router.get('/auth/users', users_1.getAllUsers);
    router.get('/users/:id', users_1.deleteUsers);
};
//# sourceMappingURL=users.js.map