"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const PORT = process.env.PORT || 3001;
new app_1.default().start(PORT);
//# sourceMappingURL=server.js.map