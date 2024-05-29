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
exports.fetchExistingBlog = exports.updateExistingBlog = exports.deleteExistingBlog = exports.addNewBlog = void 0;
const constants_1 = require("../../common/config/constants");
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const logger_1 = __importDefault(require("../../common/utils/logger"));
const shortUUID_1 = require("../../common/utils/shortUUID");
const mysql_db_1 = require("../../common/utils/mysql-db");
const addNewBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        logger_1.default.info({
            commonMessage: messages_1.messages.BLOG_INSERT_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        const result = yield (0, mysql_db_1.db)("blogtbl").insert(data);
        return {
            statusCode: status_codes_1.statusCodes.CREATED,
            message: messages_1.messages.ADD_SUCCESS,
            data: [result],
        };
    }
    catch (error) {
        console.log(error);
        logger_1.default.info({
            commonMessage: `${messages_1.messages.BLOG_INSERT_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        throw new Error(error.message);
    }
});
exports.addNewBlog = addNewBlog;
const deleteExistingBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        logger_1.default.info({
            commonMessage: messages_1.messages.BLOG_DELETE_STARTED,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        const result = yield (0, mysql_db_1.db)("blogtbl").where("id", data.id).del();
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.DELETE_SUCCESS,
            data: [result],
        };
    }
    catch (error) {
        console.log(error);
        logger_1.default.info({
            commonMessage: `${messages_1.messages.BLOG_DELETE_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        throw new Error(error.message);
    }
});
exports.deleteExistingBlog = deleteExistingBlog;
const updateExistingBlog = (data, _id) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        console.log(data, _id);
        const result = yield (0, mysql_db_1.db)("blogtbl").where("id", data.id).update(data);
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.UPDATE_SUCCES,
            data: [Object.assign(Object.assign({}, data), { result })],
        };
    }
    catch (error) {
        console.log(error);
        logger_1.default.info({
            commonMessage: `${messages_1.messages.BLOG_UPDATE_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        throw new Error(error.message);
    }
});
exports.updateExistingBlog = updateExistingBlog;
const fetchExistingBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const shortUUID = (0, shortUUID_1.getShortUUID)();
    try {
        const result = yield mysql_db_1.db.select("*").from("blogtbl");
        return {
            statusCode: status_codes_1.statusCodes.SUCCESS,
            message: messages_1.messages.FETCH_SUCCESS,
            data: result,
        };
    }
    catch (error) {
        console.log(error);
        logger_1.default.info({
            commonMessage: `${messages_1.messages.BLOG_FETCH_FAILED} ${error}`,
            shortUUID,
            module: constants_1.MODULE_NAME.BLOG,
        });
        throw new Error(error.message);
    }
});
exports.fetchExistingBlog = fetchExistingBlog;
