"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const status_codes_1 = require("../../../src/common/config/status-codes");
const blogRouter = __importStar(require("../../../src/blog/routes/blog.routes"));
const messages_1 = require("../../../src/common/config/messages");
jest.mock("../../../src/blog-manager/controllers/blog.controller", () => ({
    addBlog: (req, res) => res.status(status_codes_1.statusCodes.SUCCESS).json({
        statusCode: status_codes_1.statusCodes.SUCCESS,
        message: messages_1.messages.ADD_SUCCESS,
        data: [],
    }),
    deleteBlog: (req, res) => res.status(status_codes_1.statusCodes.SUCCESS).json({
        statusCode: status_codes_1.statusCodes.SUCCESS,
        message: messages_1.messages.ADD_SUCCESS,
        data: [],
    }),
    fetchBlog: (req, res) => res.status(status_codes_1.statusCodes.SUCCESS).json({
        statusCode: status_codes_1.statusCodes.SUCCESS,
        message: messages_1.messages.ADD_SUCCESS,
        data: [],
    }),
    updateBlog: (req, res) => res.status(status_codes_1.statusCodes.SUCCESS).json({
        statusCode: status_codes_1.statusCodes.SUCCESS,
        message: messages_1.messages.ADD_SUCCESS,
        data: [],
    }),
}));
const app = (0, express_1.default)();
app.use("/", blogRouter.router);
describe("habitRouter", () => {
    it("should call habitRouter controller function addBlog when /blog route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).post("/blog");
        expect(res.status).toEqual(status_codes_1.statusCodes.SUCCESS);
    }));
    it("should call habitRouter controller function fetchBlog when /blog route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).get("/blog");
        expect(res.status).toEqual(status_codes_1.statusCodes.SUCCESS);
    }));
    it("should call habitRouter controller function deleteBlog when /blog/:id route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).delete("/blog/:id");
        expect(res.status).toEqual(status_codes_1.statusCodes.SUCCESS);
    }));
    it("should call habitRouter controller function updateBlog when /blog/:id route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).patch("/blog/:id");
        expect(res.status).toEqual(status_codes_1.statusCodes.SUCCESS);
    }));
});
