import TodoCard from '../todoCard/todoCard';
import "./index.css";

export default function TodoList ({todoList}) {
  return (
    <div className="todo-list">
      {
        todoList?.map(data => <TodoCard key={data._id} task={data.task}/>)
      }
    </div>
  )
}