"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUsers = exports.getUserById = exports.getUsersBySessionToken = exports.getUsersByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    }
});
exports.UserModel = mongoose_1.default.model('user', userSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUsersByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUsersByEmail = getUsersByEmail;
const getUsersBySessionToken = (sessionToken) => exports.UserModel.findOne({
    'authentication.sessionToken': sessionToken,
});
exports.getUsersBySessionToken = getUsersBySessionToken;
const getUserById = (id) => exports.UserModel.findById(id);
exports.getUserById = getUserById;
const createUsers = (values) => new exports.UserModel(values).save().then((user) => user.toObject());
exports.createUsers = createUsers;
const deleteUserById = (id) => exports.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUserById = updateUserById;
//# sourceMappingURL=loginSchema.js.map