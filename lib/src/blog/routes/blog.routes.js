"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const blog_controller_1 = require("../controllers/blog.controller");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * @swagger
 * /Blog:
 *   get:
 *     summary: You can fetch all Blogs
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success : Fetched all the Blogs"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the Blog
 *                         example: Reading
 *                       content:
 *                         type: string
 *                         description: Blog content
 *                         example: This is an blog content
 *       500:
 *         description: Internal Server Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: "Failed to add fetch Blog"
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Connection failed
 */
router.get("/Blog", blog_controller_1.fetchBlog);
/**
 * @swagger
 * /Blog:
 *   post:
 *     summary: You can add new Blogs
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the Blog
 *                 example: Reading
 *               content:
 *                 type: string
 *                 description: content of the blog
 *                 example: Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh.
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: New Blog has been added"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the Blog
 *                         example: Reading
 *                       content:
 *                         type: string
 *                         description: content of blog
 *                         example: Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh.
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: "Failed to add new Blog"
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.post("/Blog", blog_controller_1.addBlog);
/**
 * @swagger
 * /Blog/{id}:
 *   patch:
 *     summary: You can update existing Blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         title: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Blog Id
 *     responses:
 *       200:
 *         description: A successful response
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the Blog
 *                 example: Reading
 *               content:
 *                 type: string
 *                 description: content of the blog
 *                 example: Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh.
 *             required:
 *               - title
 *               - content
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: Updated existing Blog"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the Blog
 *                         example: Reading
 *                       content:
 *                         type: string
 *                         description: content of the blog
 *                         example: Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh.
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: "Failed to update existing Blog"
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.patch("/Blog/:id", blog_controller_1.updateBlog);
/**
 * @swagger
 * /Blog/{id}:
 *   delete:
 *     summary: You can delete existing Blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         title: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: Deleted Existing Blog"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the Blog
 *                         example: Reading
 *                       content:
 *                         type: string
 *                         description: content of the blog
 *                         example: 21
 *
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: string
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: "Failed to delete existing Blog"
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.delete("/Blog/:id", blog_controller_1.deleteBlog);
