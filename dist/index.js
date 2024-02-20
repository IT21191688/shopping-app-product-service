"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", (req, res, next) => {
    return res.status(200).json({ msg: "Hello From Product" });
});
app.listen(8002, () => {
    console.log("Product Microservice Listening to Port 8002");
});
