import mongoose, { Document } from 'mongoose';

interface IToDo extends Document {
  text: string;
}

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model<IToDo>('ToDo', todoSchema);


