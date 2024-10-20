"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];
app.get("/", (req, res) => {
    res.send({ message: "Welcome", users });
});
app.get("/users", (req, res) => {
    res.send(users);
});
// Start Server
app.listen(5001, () => {
    console.log(`Server is running on port ${5001}`);
});
