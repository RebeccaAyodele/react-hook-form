import { useState } from "react";

type TaskFormProps = {
  addTask: (
    title: string,
    content: string,
    dueDate: string,
    type: "Work" | "School" | "Self"
  ) => void;
};

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState<"Work" | "School" | "Self">("Work");

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !dueDate.trim()) return;
    addTask(title, content, dueDate, type);
    setTitle("");
    setContent("");
    setDueDate("");
    setType("Work");
  };


  return (
    <form onSubmit={handleSubmit} className="w-[292px] h-[275px] bg-white shadow-gray-400 rounded-xl drop-shadow-xl p-4 mt-12 relative">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-1 w-full mb-2 px-2 focus:outline-blue-300"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Task Content"
        className="border w-full px-2 mb-2 focus:outline-blue-300"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2 focus:outline-blue-300"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "Work" | "School" | "Self")}
        className="border p-2 w-full mb-2 focus:outline-blue-300"
      >
        <option value="Work">Work</option>
        <option value="School">School</option>
        <option value="Self">Self</option>
      </select>
      <button
        type="submit"
        className="bg-blue-400 text-white p-2 w-full rounded"
      >
        Add Task
      </button>
      
    </form>
  );
};

export default TaskForm;
