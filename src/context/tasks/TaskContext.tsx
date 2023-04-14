import React, {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export type TaskValues = {
  title: string;
  description: string;
};
export type Task = TaskValues & {
  id: number;
};

type TaskState = {
  tasks: Task[];
};

type TaskContextValues = {
  state: TaskState;
  dispatch: Dispatch<any>;
};

const initialState: TaskState = {
  tasks: [],
};

const initialContextValues: TaskContextValues = {
  state: initialState,
  dispatch: () => {},
};

export const TaskContext =
  createContext<TaskContextValues>(initialContextValues);

export enum ACTION_TYPES {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  EDIT_TASK = "EDIT_TASK",
  RESTORE_STATE = "RESTORE_STATE",
}

const reducer = (state: TaskState, action) => {
  switch (action.type) {
    case ACTION_TYPES.RESTORE_STATE: {
      return action.payload;
    }
    case ACTION_TYPES.ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
            id: state.tasks.length,
          },
        ],
      };
    }
    case ACTION_TYPES.EDIT_TASK: {
      const updatedTaks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTaks,
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

const TASK_STATE_KEY = "TASKS_STATE";

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateIsRecovered, setStateIsRecovered] = useState(false);
  useEffect(() => {
    if (window) {
      const recoveredState = window.localStorage.getItem(TASK_STATE_KEY);
      if (recoveredState) {
        dispatch({
          type: ACTION_TYPES.RESTORE_STATE,
          payload: JSON.parse(recoveredState),
        });
      }
      setStateIsRecovered(true);
    }
  }, []);
  useEffect(() => {
    if (stateIsRecovered)
      window.localStorage.setItem(TASK_STATE_KEY, JSON.stringify(state));
  }, [state, stateIsRecovered]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {stateIsRecovered && children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
