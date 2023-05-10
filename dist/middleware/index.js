"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const lodash_1 = require("lodash");
const loginSchema_1 = require("../schema/loginSchema");
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies['ANTONIO-AUTH'];
        if (!sessionToken) {
            return res.sendStatus(403);
        }
        const existingUser = await (0, loginSchema_1.getUsersBySessionToken)(sessionToken);
        if (!existingUser) {
            return res.sendStatus(403);
        }
        (0, lodash_1.merge)(req, { identity: existingUser });
        return next();
    }
    catch (error) {
        return res.sendStatus(400);
    }
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=index.js.map