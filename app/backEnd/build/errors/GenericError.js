"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericError extends Error {
    constructor(message, status) {
        super(message);
        this._message = message;
        this._status = status;
    }
    get message() {
        return this._message;
    }
    get status() {
        return this._status;
    }
}
exports.default = GenericError;
//# sourceMappingURL=GenericError.js.map