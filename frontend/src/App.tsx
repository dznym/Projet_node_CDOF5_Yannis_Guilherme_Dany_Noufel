import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo.tsx";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi.tsx";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


interface ToDoItem {
  _id: string;
  text: string;
}

const App: React.FC = () => {
  const [toDo, setToDo] = useState<ToDoItem[]>([]);
  const [text, setText] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [toDoId, setToDoId] = useState<string>("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id: string, text: string) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
