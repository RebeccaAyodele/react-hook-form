import { createContext, useContext } from "react";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  heading?: string;
  description: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const initData: AppState = {
  lists: [
    {
      id: "0",
      text: "To-Do",
      heading: "No task yet",
      description: "Add a new task to get started",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In-Progress",
      description: "Start working on a task to move it here",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Completed",
      description: "Tasks that are completed will appear here",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

interface AppStateContextProps {
    state: AppState;
  }
  
  const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
  );
  
  export const AppStateProvider = ({ children }: React.PropsWithChildren) => {
    return (
      <AppStateContext.Provider value={{ state: initData }}>
        {children}
      </AppStateContext.Provider>
    );
  };
  
  export const useAppState = () => {
    return useContext(AppStateContext);
  };
  