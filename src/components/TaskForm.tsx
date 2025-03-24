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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Task Content"
        className="border p-2 w-full mb-2"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "Work" | "School" | "Self")}
        className="border p-2 w-full mb-2"
      >
        <option value="Work">Work</option>
        <option value="School">School</option>
        <option value="Self">Self</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
