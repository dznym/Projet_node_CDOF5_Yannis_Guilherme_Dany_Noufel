import mongoose, { Document, Schema } from 'mongoose';

export interface IToDo extends Document {
  text: string;
  category: string;

}

const todoSchema: Schema<IToDo> = new Schema({
    text: {
        type: String,
        required: true
    },
    category: {
      type: String,
      required: true
    }
});

export default mongoose.model<IToDo>('ToDo', todoSchema);


