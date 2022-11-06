import { createContext, useEffect, useState } from "react";
import axios from 'axios'

import './TaskPage.css'
import Task from '../../components/task'
import ProjectSideBar from '../../components/ProjectSideBar';

const taskContext = createContext();

function TaskPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/tasks`)
        .then(res => {
            setTasks(res.data);
        })
        .catch(error => console.log(error));
    }, []);

   return(
    <div className="wrapper">
        <div className="header"></div>
        <div className="main">
            <div className="side-bar">
                <ProjectSideBar />
            </div>
            <div className="tasks">
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
        </div>
    </div>
   )
}


export default TaskPage