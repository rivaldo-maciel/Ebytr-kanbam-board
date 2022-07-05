"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ErrorMid_1 = require("./middlewares/ErrorMid");
const User_1 = require("./routes/User");
const Board_1 = require("./routes/Board");
const Task_1 = require("./routes/Task");
const TaskColumn_1 = require("./routes/TaskColumn");
const UserBoard_1 = require("./routes/UserBoard");
const Login_1 = require("./routes/Login");
const BoardColumn_1 = require("./routes/BoardColumn");
class app {
    constructor() {
        this._express = express();
        this.config();
        this.routes();
        this.useErrorMiddleware();
    }
    routes() {
        this._express.use('/users', User_1.default);
        this._express.use('/boards', Board_1.default);
        this._express.use('/tasks', Task_1.default);
        this._express.use('/taskColumns', TaskColumn_1.default);
        this._express.use('/usersBoards', UserBoard_1.default);
        this._express.use('/login', Login_1.default);
        this._express.use('/boardsColumns', BoardColumn_1.default);
    }
    config() {
        this._express.use(express.json());
    }
    useErrorMiddleware() {
        this._express.use(ErrorMid_1.default);
    }
    start(PORT) {
        this._express.listen(PORT, () => console.log(`server running on port ${PORT}`));
    }
}
exports.default = app;
//# sourceMappingURL=app.js.map