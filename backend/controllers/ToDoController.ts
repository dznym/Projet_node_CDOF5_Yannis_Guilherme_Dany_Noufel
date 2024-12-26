import ToDoModel from '../models/ToDoModel';
import { Request, Response } from 'express';

export const getToDo = async (req: Request, res: Response) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

export const saveToDo = async (req: Request, res: Response) => {
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.error("Error adding todo:", error);
            res.status(500).send("Error adding todo");
        });
};

export const updateToDo = async (req: Request, res: Response) => {
    const { _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => {
            console.log("Updated Successfully...");
            res.send("Updated Successfully");
        })
        .catch((error) => {
            console.error("Error updating todo:", error);
            res.status(500).send("Error updating todo");
        });
};

export const deleteToDo = async (req: Request, res: Response) => {
    const { _id } = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => {
            console.log("Deleted Successfully...");
            res.send("Deleted Successfully");
        })
        .catch((error) => {
            console.error("Error deleting todo:", error);
            res.status(500).send("Error deleting todo");
        });
};