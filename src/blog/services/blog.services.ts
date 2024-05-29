import { MODULE_NAME } from "../../common/config/constants";
import { messages } from "../../common/config/messages";
import { statusCodes } from "../../common/config/status-codes";
import logger from "../../common/utils/logger";
import { getShortUUID } from "../../common/utils/shortUUID";
import { db } from "../../common/utils/mysql-db";

export const addNewBlog = async (data: any) => {
  const shortUUID = getShortUUID();
  try {
    logger.info({
      commonMessage: messages.BLOG_INSERT_STARTED,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    const result = await db("blogtbl").insert(data);
    return {
      statusCode: statusCodes.CREATED,
      message: messages.ADD_SUCCESS,
      data: [result],
    };
  } catch (error: any) {
    console.log(error);
    logger.info({
      commonMessage: `${messages.BLOG_INSERT_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    throw new Error(error.message);
  }
};

export const deleteExistingBlog = async (data: any) => {
  const shortUUID = getShortUUID();
  try {
    logger.info({
      commonMessage: messages.BLOG_DELETE_STARTED,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    const result = await db("blogtbl").where("id", data.id).del();
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.DELETE_SUCCESS,
      data: [result],
    };
  } catch (error: any) {
    console.log(error);
    logger.info({
      commonMessage: `${messages.BLOG_DELETE_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    throw new Error(error.message);
  }
};

export const updateExistingBlog = async (data: any, _id: string) => {
  const shortUUID = getShortUUID();
  try {
    console.log(data, _id);
    const result = await db("blogtbl").where("id", data.id).update(data);
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.UPDATE_SUCCES,
      data: [{ ...data, result }],
    };
  } catch (error: any) {
    console.log(error);
    logger.info({
      commonMessage: `${messages.BLOG_UPDATE_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    throw new Error(error.message);
  }
};

export const fetchExistingBlog = async () => {
  const shortUUID = getShortUUID();
  try {
    const result = await db.select("*").from("blogtbl");
    return {
      statusCode: statusCodes.SUCCESS,
      message: messages.FETCH_SUCCESS,
      data: result,
    };
  } catch (error: any) {
    console.log(error);
    logger.info({
      commonMessage: `${messages.BLOG_FETCH_FAILED} ${error}`,
      shortUUID,
      module: MODULE_NAME.BLOG,
    });
    throw new Error(error.message);
  }
};
