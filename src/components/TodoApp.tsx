import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  type: "Work" | "School" | "Self";
}

interface TodoAppProps {
  isFormVisible: boolean;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoApp({isFormVisible, setIsFormVisible}: TodoAppProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  //LOAD TASK FROM LOCAL STORAGE
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  //SAVE TASK TO LOCAL STORAGE
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // ADD TASK
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
    setIsFormVisible(false);
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
    <div>

      {editingTask ? (
        <div className="bg-white p-4 rounded shadow">
          <input
            type="text"
            value={editingTask.title}
            onChange={(e) =>
              setEditingTask({ ...editingTask, title: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={editingTask.content}
            onChange={(e) =>
              setEditingTask({ ...editingTask, content: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <input
            type="date"
            value={editingTask.dueDate}
            onChange={(e) =>
              setEditingTask({ ...editingTask, dueDate: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <select
            value={editingTask.type}
            onChange={(e) =>
              setEditingTask({
                ...editingTask,
                type: e.target.value as "Work" | "School" | "Self",
              })
            }
            className="border p-2 w-full mb-2"
          >
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Self">Self</option>
          </select>
          <button
            onClick={() =>
              saveEditing(
                editingTask.title,
                editingTask.content,
                editingTask.dueDate,
                editingTask.type
              )
            }
            className="bg-green-500 text-white p-2 w-full rounded"
          >
            Save
          </button>
        </div>
      ) : (
        isFormVisible && <TaskForm addTask={addTask} />
      )}

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            startEditing={startEditing}
          />
        ))}
      </div>
    </div>
  );
}
