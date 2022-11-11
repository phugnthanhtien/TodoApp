import { createContext, useEffect, useState } from "react";
import axios from '../../API/axios'
import './TaskPage.css'
import Task from '../../components/task'
import useStores from '../../hooks/useStores'
import { action } from "mobx";

const taskContext = createContext();

function TaskPage() {
    const { taskStore } = useStores()
    taskStore.fetchTaskList()

    let taskList = taskStore.taskList
    console.log('hi123: ', taskList)

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);


    function handleAddTask() {
        try {
            // axios.post('/tasks', { content: newTask })
            
            taskStore.addTask(newTask)
            setNewTask('')

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
                onChange={event => setNewTask(event.target.value)}
                />
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <div className="list-task">
                {taskList.map(task => <Task key = {task._id} data = {task}/>)}
            </div>
        </div>
    </div>
   )
}


export default TaskPage