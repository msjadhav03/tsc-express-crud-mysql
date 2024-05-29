import { Request, Response } from "express";
import {
  testControllerFunction,
  addBlog,
  updateBlog,
  fetchBlog,
  deleteBlog,
} from "../../../src/blog/controllers/blog.controller"; // Replace "yourControllerFile" with the path to your controller file

import * as BlogService from "../../../src/blog/services/blog.services";
describe("Controller Functions", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("testControllerFunction", () => {
    it("should respond with a test message", async () => {
      await testControllerFunction(
        mockRequest as Request,
        mockResponse as Response
      );
      expect(mockResponse.send).toHaveBeenCalledWith({
        statusCode: 200,
        message: "Success true",
        data: [undefined],
      });
    });
  });

  describe("addBlog", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(BlogService, "addNewBlog")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await addBlog(
        { status: "started", days: 20, name: "reading" } as any,
        mockResponse as Response
      );
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been called with data", async () => {
      jest.spyOn(BlogService, "addNewBlog").mockRejectedValue({
        statusCode: 200,
        message: "Success",
        error: "Error",
      });
      await addBlog(
        { status: "started", days: 20, name: "reading" } as any,
        mockResponse as Response
      );
    });
  });

  describe("deleteBlog", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(BlogService, "deleteExistingBlog")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await deleteBlog({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected with data", async () => {
      jest.spyOn(BlogService, "deleteExistingBlog").mockRejectedValue({
        statusCode: 200,
        message: "Success",
        error: "Error",
      });
      await deleteBlog({ id: "reading" } as any, mockResponse as Response);
    });
  });

  describe("updateBlog", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(BlogService, "updateExistingBlog")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await updateBlog({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected", async () => {
      jest
        .spyOn(BlogService, "updateExistingBlog")
        .mockRejectedValue({ statusCode: 200, message: "Success", data: [] });
      await updateBlog({ id: "reading" } as any, mockResponse as Response);
    });
  });

  describe("fetchBlog", () => {
    it("should have been called with data", async () => {
      jest
        .spyOn(BlogService, "fetchExistingBlog")
        .mockResolvedValue({ statusCode: 200, message: "Success", data: [] });
      await fetchBlog({ id: "reading" } as any, mockResponse as Response);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should have been rejected", async () => {
      jest
        .spyOn(BlogService, "fetchExistingBlog")
        .mockRejectedValue({ statusCode: 200, message: "Success", error: "" });
      await fetchBlog({ id: "reading" } as any, mockResponse as Response);
    });
  });
});
