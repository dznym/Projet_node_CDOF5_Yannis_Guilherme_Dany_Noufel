import express, { Router, Request, Response } from "express";
import { getToDo, saveToDo, updateToDo, deleteToDo } from "../controllers/ToDoController";

const router: Router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all ToDos
 *     description: Retrieve a list of ToDos
 *     responses:
 *       200:
 *         description: A list of ToDos
 */
router.get('/', getToDo);

/**
 * @swagger
 * /save:
 *   post:
 *     summary: Save a new ToDo
 *     description: Add a new ToDo item
 *     responses:
 *       200:
 *         description: ToDo saved successfully
 */
router.post('/save', saveToDo);

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update a ToDo
 *     description: Update an existing ToDo item
 *     responses:
 *       200:
 *         description: ToDo updated successfully
 */
router.post('/update', updateToDo);

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete a ToDo
 *     description: Remove a ToDo item
 *     responses:
 *       200:
 *         description: ToDo deleted successfully
 */
router.post('/delete', deleteToDo);

export default router;
