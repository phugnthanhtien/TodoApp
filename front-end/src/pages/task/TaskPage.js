import './Task.css'
import Task from '../../components/task'

function TaskPage(props) {
   console.log(props)

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
                <Task
                    content="Pepsi"
                />
                <Task
                    content="Coca"
                />
            </div>
        </div>
    </div>
   )
}


export default TaskPage