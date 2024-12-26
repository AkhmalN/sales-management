"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var database_1 = __importDefault(require("../config/database"));
var db = mysql2_1.default.createConnection(database_1.default);
db.connect(function (err) {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the MySQL database");
});
exports.default = db;
