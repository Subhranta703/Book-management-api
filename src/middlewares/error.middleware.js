"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const express_1 = require("express");
const errorHandler = (err, req, res, next) => {
    res.status(400).json({ message: err.message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map