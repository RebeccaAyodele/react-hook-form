import {useState} from "react"

type Task = {
    id: number;
    text: string;
    done: boolean;
}

interface TaskItemProps {
    task: Task;
    onChange: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskItem = ({task, onChange, onDelete}: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if (isEditing) {
        taskCo
    }
  return (
    <div>TaskItem</div>
  )
}

export default TaskItem