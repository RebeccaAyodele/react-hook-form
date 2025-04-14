import { useReducer } from "react";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type Action = 
| {type: 'added'; id: number; text: string}
| {type: 'changed', task: Task}
| {type: 'deleted', id: number}


const tasksReducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case 'added' : {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }]
    }
    case 'changed' : {
      return tasks.map(t =>
        (t.id === action.task.id ? action.task : t)
      )
    }
    case 'deleted' : {
      return tasks.filter(t => t.id !== action.id);
    }
    default:
      throw new Error('Unknown action')
  }
}

let nextId = 3; 

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];



const practice = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);


  const handleAddText = (text: string) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  const handleChangeText = (task: Task) => {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }


  
  return (
    <div>
      
    </div>
  );
};

export default practice;
