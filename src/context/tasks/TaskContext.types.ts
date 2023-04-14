import { Dispatch } from "react";

export type TaskValues = {
  title: string;
  description: string;
};
export type Task = TaskValues & {
  id: number;
};

export type TaskState = {
  tasks: Task[];
};

export type TaskContextValues = {
  state: TaskState;
  dispatch: Dispatch<any>;
};
