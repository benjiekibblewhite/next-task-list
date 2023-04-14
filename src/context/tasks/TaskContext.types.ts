import { Dispatch } from "react";

export type TaskValues = {
  title: string;
  description: string;
};
export type Task = TaskValues & {
  id: number;
  checked: boolean;
};

export type TaskState = {
  tasks: Task[];
};

export enum ACTION_TYPES {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  EDIT_TASK = "EDIT_TASK",
  RESTORE_STATE = "RESTORE_STATE",
}

export type TaskActions =
  | { type: ACTION_TYPES.ADD_TASK; payload: TaskValues }
  | { type: ACTION_TYPES.DELETE_TASK; payload: number }
  | { type: ACTION_TYPES.EDIT_TASK; payload: Task }
  | { type: ACTION_TYPES.RESTORE_STATE; payload: TaskState };

export type TaskContextValues = {
  state: TaskState;
  dispatch: Dispatch<TaskActions>;
};
