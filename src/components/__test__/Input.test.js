import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "../todoInput/todoInput";

beforeEach(() => {
  render(<TodoInput />);
});

test('should input empty', () => {
  const inputEl = screen.getByPlaceholderText(/create todo/i);

  expect(inputEl).toHaveValue("");
});

test('test input change', () => {
  const inputEl = screen.getByPlaceholderText(/create todo/i);

  expect(inputEl).toHaveValue("");

  userEvent.type(inputEl, "test text");

  expect(inputEl).toHaveValue("test text");
});

