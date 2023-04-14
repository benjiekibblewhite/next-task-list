import { TaskValues } from "@/context/tasks/TaskContext.types";

export interface TaskInputFormProps {
  handleSubmit: (payload: TaskValues) => void;
  initialTitle?: string;
  initialDescription?: string;
}
