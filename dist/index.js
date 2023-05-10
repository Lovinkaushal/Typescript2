"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use('/', (0, router_1.default)());
const server = http_1.default.createServer(app);
server.listen(8080, () => {
    console.log('server running on http://localhost:8080/');
});
const dbConnect = async () => {
    try {
        mongoose_1.default.set('strictQuery', false);
        const conn = await mongoose_1.default.connect('mongodb://127.0.0.1:27017/typescript');
        console.log("Database Connected Sucessfully");
    }
    catch (error) {
        console.log("Database Error", error);
    }
};
dbConnect();
//# sourceMappingURL=index.js.map