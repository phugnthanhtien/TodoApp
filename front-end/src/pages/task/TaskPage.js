import { createContext, useEffect, useState } from "react";

import './Task.css'
import Task from '../../components/task'

const taskContext = createContext();

function TaskPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch("http://127.0.0.1:3001/tasks")
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
        });
    }, []);

   return(
    <div className="main">
        <div className="container">
            <div className="add-task">
                <input
                id="new-task-input"
                type="text"
                placeholder="Enter new task"
                />
                <button>Add task</button>
            </div>
            <taskContext.Provider value = {tasks} className="list-task">
                {tasks.map(task => <Task key = {task._id} data = {task}/>)}
            </taskContext.Provider>
        </div>
    </div>
   )
}


export default TaskPage