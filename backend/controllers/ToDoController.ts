import ToDoModel, { IToDo } from '../models/ToDoModel';
import { Request, Response } from 'express';

export const getToDo = async (req: Request, res: Response): Promise<void> => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send("Error fetching todos");
    }
};

export const saveToDo = async (req: Request, res: Response): Promise<void> => {
    const { text, category } = req.body;
    try {
        const newToDo: IToDo = await ToDoModel.create({ text, category });
        console.log("Added Successfully...");
        console.log(newToDo);
        res.status(201).send(newToDo);
    } catch (error) {
        console.error("Error adding todo:", error);
        res.status(500).send("Error adding todo");
    }
};

export const updateToDo = async (req: Request, res: Response): Promise<void> => {
    const { _id, text, category } = req.body;
    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text, category }, { new: true });
        if (!updatedToDo) {
            res.status(404).send("Todo not found");
            return;
        }
        console.log("Updated Successfully...");
        res.send(updatedToDo);
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).send("Error updating todo");
    }
};

export const deleteToDo = async (req: Request, res: Response): Promise<void> => {
    const { _id } = req.body;
    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
        if (!deletedToDo) {
            res.status(404).send("Todo not found");
            return;
        }
        console.log("Deleted Successfully...");
        res.send("Deleted Successfully");
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).send("Error deleting todo");
    }
};
