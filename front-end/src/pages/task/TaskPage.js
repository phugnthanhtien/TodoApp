import { createContext, useEffect, useState } from "react";
<<<<<<< HEAD
import axios from '../../API/axios'
=======
import axios from 'axios'
>>>>>>> TC11

import './TaskPage.css'
import Task from '../../components/task'
import ProjectSideBar from '../../components/ProjectSideBar';

const taskContext = createContext();

function TaskPage() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        axios.get('/tasks').then(response => {
            setTasks(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function handleInputNewTask(event) {
        setNewTask(event.target.value)
    }

    function handleAddNewTask() {
        try {
            axios.post('/tasks', { content: newTask })
                .then(response => { 
                    response.data.map(data => {
                        console.log(data.content)
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }

   return(
    <div className="main">
        <div className="container">
            <div className="add-task">
                <input
                id="new-task-input"
                type="text"
                placeholder="Enter new task"
                onChange={handleInputNewTask}
                />
                <button onClick={handleAddNewTask}>Add task</button>
=======
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
>>>>>>> TC11
            </div>
        </div>
    </div>
   )
}


export default TaskPage