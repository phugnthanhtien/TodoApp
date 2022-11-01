import './Task.module.css'

function Task({ content }) {
    return(
        <div className="task">
            <div className="content">
                { content }
            </div>
            <div className="actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Task