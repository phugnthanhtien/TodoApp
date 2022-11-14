import { useEffect, useState } from "react";
import './TaskPage.css'
import Task from '../../components/task'
import useStores from '../../hooks/useStores'
import { observer } from "mobx-react"


function TaskPage() {
    const { taskStore } = useStores()

    useEffect(() => {
        taskStore.loadTasks()
    }, [])

    const tasks = taskStore.tasks
    const [input, setInput] = useState('')

    const handleAddTask = () => {
        if (input) {
            taskStore.createTask(input)
            setInput('')
        }
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
                    {tasks.map((task, index) => (
                        <Task key={index} data={task}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default observer(TaskPage)

