import { createContext, useEffect, useState } from "react";
import axios from '../../API/axios'

import './TaskPage.css'
import Task from '../../components/task'

const taskContext = createContext();

function TaskPage() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
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
            </div>
            <taskContext.Provider value = {tasks} className="list-task">
                {tasks.map(task => <Task key = {task._id} data = {task}/>)}
            </taskContext.Provider>
        </div>
    </div>
   )
}


export default TaskPage