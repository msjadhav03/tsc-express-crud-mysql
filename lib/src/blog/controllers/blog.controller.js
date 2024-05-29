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
exports.deleteBlog = exports.fetchBlog = exports.updateBlog = exports.addBlog = exports.testControllerFunction = void 0;
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const blog_services_1 = require("../services/blog.services");
const logger_1 = __importDefault(require("../../common/utils/logger"));
const shortUUID_1 = require("../../common/utils/shortUUID");
const constants_1 = require("../../common/config/constants");
const testControllerFunction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUUID = (0, shortUUID_1.getShortUUID)();
        logger_1.default.info({
            commonMessage: messages_1.messages.HEALTH_CHECK_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        logger_1.default.info({
            commonMessage: messages_1.messages.HEALTH_CHECK_COMPLETED,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        return res.send({
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.TEST_MESSAGE,
            data: [req.body],
        });
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.testControllerFunction = testControllerFunction;
const addBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, blog_services_1.addNewBlog)(req.body);
        return res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.addBlog = addBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield (0, blog_services_1.updateExistingBlog)(req.body, (_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.updateBlog = updateBlog;
const fetchBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, blog_services_1.fetchExistingBlog)();
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.fetchBlog = fetchBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, blog_services_1.deleteExistingBlog)(Object.assign({}, req.params));
        res.send(response);
    }
    catch (error) {
        res.send({
            statusCode: status_codes_1.statusCodes.INTERNAL_SERVER_ERROR,
            message: messages_1.messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    }
});
exports.deleteBlog = deleteBlog;
