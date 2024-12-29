import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

interface ToDoProps {
  text: string;
  category: string;
  updateMode: () => void;
  deleteToDo: () => void;
}

const ToDo: React.FC<ToDoProps> = ({ text, category, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="category">{category}</div>
      <div className="icons">
        <BiEdit className='icon' onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;