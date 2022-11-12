import { createContext, useEffect, useState } from "react";
import axios from '../../API/axios'
import './TaskPage.css'
import Task from '../../components/task'
import useStores from '../../hooks/useStores'
import { action } from "mobx";
import TaskStore from "../../stores/taskStore";


function TaskPage() {
    const { taskStore } = useStores()
    const { tasks } = taskStore
    
    

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(() => {
        taskStore.loadTasks()
        return tasks
    })

    const handleAddTask = () => {

        setTodos(prev => {
            const newTodo = [...prev, input]
            console.log(newTodo)
            taskStore.createTask(input)
            return newTodo
        })
        setInput('')
    }
    
    

   return(
    <div className="main">
        <div className="container">
            <div className="add-task">
                <input
                id="new-task-input"
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}
                />
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <div className="list-task">
                {todos.map((todo, index) => (
                    <li key={index}>{todo.content}</li>
                ))}
            </div>
        </div>
    </div>
   )
}


export default TaskPage

// taskList.map(task => <Task key = {task._id} data = {task}/>)