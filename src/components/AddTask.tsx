import { useState } from "react";

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder="Add task" />
    </form>
  );
}
