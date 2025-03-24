import profile from "../images/profile.jpg";
import { DeleteIcon, EditIcon } from "./Icons";


type Task = {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  type: "Work" | "School" | "Self";
};

type TaskCardProps = {
  task: Task;
  deleteTask: (id: string) => void;
  startEditing: (updatedTask: Task) => void;
};

const TaskCard = ({ task, deleteTask, startEditing }: TaskCardProps) => {
  return (
    <div className="w-[292px] h-[275px] bg-white shadow-gray-400 rounded-xl drop-shadow-xl p-6 relative">
      <div>
        <img src={profile} alt="profile" className="w-6 h-6" />
      </div>
      <div>
        <h1 className="text-xl font-semibold my-2">{task.title}</h1>
      </div>
      <div>
        <p className="text-gray-600">{task.content}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-green-200 rounded w-[46px] h-[26px] text-center">
              <h3>{task.type}</h3>
            </div>
            <p className="text-[8px] font-thin text-gray-500">Due: {task.dueDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {/* <DragIcon onClick={onClick} /> */}
          <EditIcon onClick={() => startEditing({...task, title: "Updated Title"})} />
          <DeleteIcon onClick={() => deleteTask(task.id)} />
        </div>
      </div>
    </div>
  );
};


export default TaskCard;