"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = __importDefault(require("@app/utils/connect"));
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
    }
    UsersRepository.prototype.retrieveAll = function (searchParams) {
        var query = "SELECT * FROM users";
        var condition = "";
        return new Promise(function (resolve, reject) {
            connect_1.default.query(query, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    return UsersRepository;
}());
exports.default = new UsersRepository();
