import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../todoList/todoList";

const createFakeTasks = () => {
  let numberArr = Array.from(Array(Math.floor(Math.random() * 100)).keys());
  let fakeTasks = [];
  numberArr.map(n => {fakeTasks.push({_id: n, task: "task " + n})});

  return fakeTasks;
}

test('renders tasks', () => {
  const fakeTasks = createFakeTasks();
  render(<TodoList todoList={fakeTasks}/>)

  const tasks = screen.getAllByTestId('task-card').map(tc => tc.textContent);
  const _fakeTasks = fakeTasks.map(t => t.task);

  expect(tasks).toEqual(_fakeTasks);
})

