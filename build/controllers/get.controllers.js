"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = void 0;
const product_1 = __importDefault(require("../models/product"));
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        product_1.default.findAll({
            attributes: { exclude: ["createdAt", "updatedAt"] },
        })
            .then((products) => {
            res.status(200).json({ msg: "all products", products });
        })
            .catch((err) => res.status(400).json(err));
    });
}
exports.getAll = getAll;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        product_1.default.findByPk(id)
            .then((product) => {
            res.status(200).json({ msg: `product with id ${id}`, product });
        })
            .catch((err) => res.status(400).json(err));
    });
}
exports.getById = getById;
