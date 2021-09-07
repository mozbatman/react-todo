import { useEffect, useState } from 'react';
import TodoInput from '../../components/todoInput/todoInput';
import TodoList from '../../components/todoList/todoList';

import axios from 'axios';
import './index.css';

const BASE_URL = process.env.API_URL;

export default function TodoContainer () {
  const [todoList, settodoList] = useState([]);
  const [fetch, setFetch] = useState(null);

  useEffect(() => {
    fetchData()
  }, [fetch])

  const fetchData = () => {
    axios.get(BASE_URL + "/task").then(res => settodoList(res.data));
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
        {
          todoList.length > 0 
          ? <TodoList todoList={todoList}/>
          : null
        }
      </div>
    </div>
  )
}