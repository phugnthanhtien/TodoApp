import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

import './Task.css'
import Task from '../../components/task'

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
            <div className="list-task">
                {tasks.map(task => <Task key = {task._id} content = {task.content}/>)}
            </div>
        </div>
    </div>
   )
}


export default TaskPage