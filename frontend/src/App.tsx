import React, { useEffect, useState, useMemo } from "react";
import ToDo from "./components/ToDo.tsx";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi.tsx";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ToDoItem {
  _id: string;
  text: string;
  category: string;
}

const categories = ["Work", "Personal", "Shopping", "Other"];

const App: React.FC = () => {
  const [toDo, setToDo] = useState<ToDoItem[]>([]);
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>(categories[0]);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [toDoId, setToDoId] = useState<string>("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id: string, text: string, category: string) => {
    setIsUpdating(true);
    setText(text);
    setCategory(category);
    setToDoId(_id);
  };

  const chartOptions = useMemo(() => {
    return {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'ToDos by Category'
      },
      series: [{
        type: 'pie',
        name: 'ToDos',
        data: categories.map(cat => ({
          name: cat,
          y: toDo.filter(item => item.category === cat).length
        }))
      }]
    };
  }, [toDo]);

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
          <select
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, category, setToDo, setText, setCategory, setIsUpdating)
                : () => addToDo(text, category, setText, setCategory, setToDo)
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
              category={item.category}
              updateMode={() => updateMode(item._id, item.text, item.category)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default App;