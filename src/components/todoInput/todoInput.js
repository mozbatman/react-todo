import { useState } from 'react';
import './index.css';

export default function TodoInput ({postTodo}) {
  const [value, setvalue] = useState("")

  const handleChange =(e) =>  {
    setvalue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo({"task": value});
    setvalue("");
  }

  return (
    <div className="todo-input">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={value} className="input" placeholder="Create Todo" onChange={handleChange}/>
        <input data-testid="apiCall" type="submit" value="Add" className="button"/>
      </form>
      
    </div>
  )
}