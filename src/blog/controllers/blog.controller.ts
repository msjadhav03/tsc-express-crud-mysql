import { Request, Response } from "express";
import { messages } from "../../common/config/messages";
import { statusCodes } from "../../common/config/status-codes";
import {
  addNewBlog,
  deleteExistingBlog,
  updateExistingBlog,
  fetchExistingBlog,
} from "../services/blog.services";
import logger from "../../common/utils/logger";
import { getShortUUID } from "../../common/utils/shortUUID";
import { MODULE_NAME } from "../../common/config/constants";

export const testControllerFunction = async (req: Request, res: Response) => {
  try {
    const shortUUID = getShortUUID();
    logger.info({
      commonMessage: messages.HEALTH_CHECK_STARTED,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    logger.info({
      commonMessage: messages.HEALTH_CHECK_COMPLETED,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    return res.send({
      statusCode: statusCodes.SUCCESS,
      message: messages.TEST_MESSAGE,
      data: [req.body],
    });
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const addBlog = async (req: Request, res: Response) => {
  try {
    const response = await addNewBlog(req.body);
    return res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const response = await updateExistingBlog(req.body, req.params?.id);
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const fetchBlog = async (req: Request, res: Response) => {
  try {
    const response = await fetchExistingBlog();
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const response = await deleteExistingBlog({ ...req.params });
    res.send(response);
  } catch (error) {
    res.send({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};
