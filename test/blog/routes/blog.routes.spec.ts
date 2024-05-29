import express from "express";
import supertest from "supertest";
import { statusCodes } from "../../../src/common/config/status-codes";
import * as blogRouter from "../../../src/blog/routes/blog.routes";
import { messages } from "../../../src/common/config/messages";

jest.mock("../../../src/blog-manager/controllers/blog.controller", () => ({
  addBlog: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  deleteBlog: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  fetchBlog: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
  updateBlog: (req: any, res: any) =>
    res.status(statusCodes.SUCCESS).json({
      statusCode: statusCodes.SUCCESS,
      message: messages.ADD_SUCCESS,
      data: [],
    }),
}));

const app = express();
app.use("/", blogRouter.router);

describe("habitRouter", () => {
  it("should call habitRouter controller function addBlog when /blog route is hit", async () => {
    const res = await supertest(app).post("/blog");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function fetchBlog when /blog route is hit", async () => {
    const res = await supertest(app).get("/blog");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function deleteBlog when /blog/:id route is hit", async () => {
    const res = await supertest(app).delete("/blog/:id");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
  it("should call habitRouter controller function updateBlog when /blog/:id route is hit", async () => {
    const res = await supertest(app).patch("/blog/:id");
    expect(res.status).toEqual(statusCodes.SUCCESS);
  });
});
