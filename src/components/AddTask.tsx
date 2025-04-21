import { useState, useContext } from "react";
import { useTasksDispatch } from "./TaskContent";

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        setText("");
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        })
      }}>Add</button>
    </>
  );
}

let nextId = 3