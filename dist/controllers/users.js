"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.getAllUsers = void 0;
const loginSchema_1 = require("../schema/loginSchema");
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, loginSchema_1.getUsers)();
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error?.message
        });
    }
};
exports.getAllUsers = getAllUsers;
const deleteUsers = async (req, res) => {
    try {
        const { id } = await req.params;
        const deleteUsers = await (0, loginSchema_1.deleteUserById)(id);
        return res.json(deleteUsers);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error?.message
        });
    }
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map