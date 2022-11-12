import { createContext, useEffect, useState } from "react";
import axios from '../../API/axios'
import './TaskPage.css'
import Task from '../../components/task'
import useStores from '../../hooks/useStores'
import { action } from "mobx";



function TaskPage() {
    const { taskStore } = useStores()
    taskStore.fetchTaskList()
    const taskList = taskStore.taskList
    console.log("123", taskList)
    const [input, setInput] = useState('')


    function handleAddTask() {
        try {
            taskStore.addTask(input)
            taskStore.fetchTaskList()
            setInput('')
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
                onChange={event => setInput(event.target.value)}
                />
                <button onClick={action(handleAddTask)}>Add task</button>
            </div>
            <div className="list-task">
                {taskList.map(task => <Task key = {task._id} data = {task}/>)}
            </div>
        </div>
    </div>
   )
}


export default TaskPage