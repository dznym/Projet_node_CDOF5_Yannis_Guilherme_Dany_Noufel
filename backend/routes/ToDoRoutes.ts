import express, { Router, Request, Response } from "express";
import { getToDo, saveToDo, updateToDo, deleteToDo } from "../controllers/ToDoController";

const router: Router = express.Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo)

export default router;
