"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const server_1 = __importDefault(require("./server"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT;
server_1.default.use((0, cors_1.default)());
server_1.default.use(routes_1.router);
(0, mongo_1.default)().then(() => console.log("Conexion Ready"));
server_1.default.listen(PORT, () => {
    console.log(`server ${PORT} listening on`);
});
