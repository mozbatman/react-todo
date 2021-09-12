import TodoCard from '../todoCard/todoCard';
import "./index.css";

export default function TodoList ({ todoList, isError, isLoading }) {
  if (isLoading) {
    return <div className="loading">Loading..</div>
  }

  if (isError) {
    return <div className="error">An error has been encountered.</div>
  }

  return (
    <div className="todo-list">
      {
        todoList?.map(data => <TodoCard key={data._id} task={data.task}/>)
      }
    </div>
  )
}