"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPackage = exports.FastLogsService = void 0;
var fastLogsService_1 = require("./fastLogsService");
Object.defineProperty(exports, "FastLogsService", { enumerable: true, get: function () { return fastLogsService_1.FastLogsService; } });
var testPackage = function () {
    console.log('testPackage');
};
exports.testPackage = testPackage;
