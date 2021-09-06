import './index.css';

export default function TodoCard ({task}) {
  return (
    <div className="todo-card">
      <div className="icon"><img src="https://img.icons8.com/fluency/25/000000/microsoft-todo-2019.png"/></div>
      <div data-testid="task-card">{task}</div>
    </div>
  )
}