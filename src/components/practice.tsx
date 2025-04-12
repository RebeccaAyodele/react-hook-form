import { useReducer } from "react";

type initialTasksProps = {
  id: number;
  text: string;
  done: boolean;
};

type Action = 
| {
  type: 'added';
  id: number;
  text: string
}
| {type: 'changed'}

interface Task {
  type: string;
}

const practice = () => {
  const [task, dispatch] = useReducer(tasksReducer, initialTasks);


  const handleAddText(text: string) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  const handleChangeText = (task) => {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  const handleDeleteTask = (taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }



  const initialTasks: initialTasksProps[] = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];
  return <div>practice</div>;
};

export default practice;
