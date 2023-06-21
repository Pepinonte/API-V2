"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const productValidation = (body) => {
    const productSchema = joi_1.default.object({
        title: joi_1.default.string().min(3).max(40).trim().required(),
        price: joi_1.default.number().required(),
        description: joi_1.default.string().min(5).max(500).trim(),
    });
    return productSchema.validate(body);
};
exports.default = productValidation;
