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
exports.createOne = void 0;
const product_1 = __importDefault(require("../models/product"));
const productValidation_1 = __importDefault(require("../validation/productValidation"));
function createOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        console.log(body);
        const { error } = (0, productValidation_1.default)(body);
        if (error)
            return res.status(401).json(error.details[0].message);
        product_1.default.create(Object.assign({}, body))
            .then((product) => {
            res.status(201).json({ msg: "product created", product });
        })
            .catch((err) => res.status(400).json(err));
    });
}
exports.createOne = createOne;
