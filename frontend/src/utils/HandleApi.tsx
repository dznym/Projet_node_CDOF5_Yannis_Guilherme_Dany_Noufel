import axios from 'axios';

const baseUrl = "http://localhost:5000";

export interface ToDo {
  _id: string;
  text: string;
  completed: boolean;
}

export const getAllToDo = (setRowData: React.Dispatch<React.SetStateAction<ToDo[]>>) => {
  axios
    .get<ToDo[]>(baseUrl)
    .then(({ data }) => {
      console.log('data --->', data);
      setRowData(data);
    })
    .catch((err) => console.log(err));
};

export const addToDo = (
  text: string,
  setRowData: React.Dispatch<React.SetStateAction<ToDo[]>>
) => {
  axios
    .post<ToDo>(`${baseUrl}/save`, { text, completed: false })
    .then((response) => {
      console.log(response.data);
      setRowData(prevData => [...prevData, response.data]);
    })
    .catch((err) => console.log(err));
};

export const updateToDo = (
  updatedToDo: ToDo,
  setRowData: React.Dispatch<React.SetStateAction<ToDo[]>>
) => {
  axios
    .post(`${baseUrl}/update`, updatedToDo)
    .then(() => {
      setRowData(prevData => 
        prevData.map(todo => 
          todo._id === updatedToDo._id ? updatedToDo : todo
        )
      );
    })
    .catch((err) => console.log(err));
};

export const deleteToDo = (
  _id: string,
  setRowData: React.Dispatch<React.SetStateAction<ToDo[]>>
) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(() => {
      setRowData(prevData => prevData.filter(todo => todo._id !== _id));
    })
    .catch((err) => console.log(err));
};
