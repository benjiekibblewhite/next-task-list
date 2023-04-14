import { TaskContextProvider } from "@/context/tasks/TaskContext";
import "@testing-library/jest-dom";
import {
  findByText,
  fireEvent,
  getByTestId,
  getByText,
  queryAllByTestId,
  render,
} from "@testing-library/react";
import Home from "..";

function setupTest() {
  const { container } = render(
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );

  return { container };
}

test("renders with no tasks", () => {
  const { container } = setupTest();
  const addTaskHeader = getByText(container, "Add New Task");
  const taskListHeader = getByText(container, "Tasks");
  const listItem = queryAllByTestId(container, "list-item");

  expect(addTaskHeader).toBeInTheDocument();
  expect(taskListHeader).toBeInTheDocument();
  expect(listItem.length).toBe(0);
});

test("can add a task to the list", async () => {
  const { container } = setupTest();
  const titleInput = getByTestId(container, "task-title");
  const descriptionInput = getByTestId(container, "task-description");
  const submitButton = getByText(container, "Save");
  const titleText = "title";
  const descriptionText = "descriptionnnn";
  fireEvent.change(titleInput, { target: { value: titleText } });
  fireEvent.change(descriptionInput, { target: { value: descriptionText } });
  fireEvent.click(submitButton);
  expect(await findByText(container, titleText)).toBeVisible();
});
