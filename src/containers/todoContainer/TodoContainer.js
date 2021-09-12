import { useEffect, useState } from 'react';
import TodoInput from '../../components/todoInput/todoInput';
import TodoList from '../../components/todoList/todoList';

import axios from 'axios';
import './index.css';

const BASE_URL = process.env.REACT_APP_API_URL;

export default function TodoContainer () {
  const [todoList, settodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get(BASE_URL + "/task")
      .then(res => {settodoList(res.data); setIsLoading(false)})
      .catch(err => {setIsError(true)});
  }

  const postTodo = (postData) => {
    axios.post(BASE_URL + "/task", postData,{headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }})
    .then(res => settodoList([...todoList, res.data]));  
  }
  

  return (
    <div className="todo">
      <div className="todo-container">
        <h1>Todo App</h1>
        <TodoInput postTodo={postTodo}/>
        <TodoList todoList={todoList} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  )
}