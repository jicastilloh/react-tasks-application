import {createContext, useState, useEffect} from 'react'
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(titleTask, descriptionTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: titleTask,
        description: descriptionTask,
      },
    ]);
  }

  function deleteTask(taskId){
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}