import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import { AddListIcon, AddTaskIcon } from "./Icons";

type Props = {
  types: string;
  heading?: string;
  description: string;
};

type Task = {
  id?: string;
  title: string;
  content: string;
  dueDate: string;
  type: "Work" | "School" | "Self";
};

const Container = ({ types, heading, description }: Props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };
  const addTask = (
    title: string,
    content: string,
    dueDate: string,
    type: "Work" | "School" | "Self"
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      content,
      dueDate,
      type,
    };
    setTasks([...tasks, newTask]);
    setIsFormVisible(false); // HIDE FORM AFTER ADDING TASK
  };

  //DELETE TASK
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // EDIT TASK
  const startEditing = (task: Task) => {
    setEditingTask(task);
  };

  //SAVE EDITED TASK
  const saveEditing = (
    title: string,
    content: string,
    dueDate: string,
    type: "Work" | "School" | "Self"
  ) => {
    if (!editingTask) return;
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, title, content, dueDate, type }
          : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div className="min-h-[706px] w-[28%] bg-primary-color rounded-[1.4rem] pt-[2.6rem] px-[2rem] mt-8 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-[22px] font-semibold">{types}</h1>
        <button onClick={toggleForm}>
          <AddTaskIcon />
        </button>
      </div>

      {isFormVisible && <TaskForm addTask={addTask} />}

      {tasks.length === 0 ? (
        //EMPTY CONTAINER
        <div className="temporary border-[#81C3FF] w-[98%] h-[275px] mt-[4rem] bg-red rounded-3xl border-dotted border-2 flex flex-col justify-center items-center">
          <h1 className="font-bold text-gray-700 text-[14px]">{heading}</h1>
          <p className="text-gray-500 text-[14px]">{description}</p>
        </div>
      ) : (

        //NON_EMPTY CONTAINER
        <div className="mt-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              startEditing={startEditing}
            />
          ))}
        </div>
      )}
    </div>
    
  );
};

export default Container;
