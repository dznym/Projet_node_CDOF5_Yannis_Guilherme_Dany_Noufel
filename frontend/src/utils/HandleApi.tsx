import axios from 'axios';

const baseUrl = "http://localhost:5000";

interface ToDo {
  _id: string;
  text: string;
  category: string;
}

const getAllToDo = (setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>) => {
  axios
    .get<ToDo[]>(baseUrl)
    .then(({ data }) => {
      console.log('data --->', data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (
  text: string,
  category: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>
) => {
  axios
    .post(`${baseUrl}/save`, { text, category })
    .then((response) => {
      console.log(response.data);
      setText("");
      setCategory("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  toDoId: string,
  text: string,
  category: string,
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text, category })
    .then(() => {
      setText("");
      setCategory("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (
  _id: string,
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>
) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((response) => {
      console.log(response.data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
