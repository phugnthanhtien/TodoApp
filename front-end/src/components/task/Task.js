import PopupEdit from "../popUpedit";
import Popup from "reactjs-popup";
import axios from "../../API/axios";

import "./Task.module.css";
import useStores from "../../hooks/useStores";

function Task({ data }) {
  const { taskStore } = useStores()

  function handleDeleteTask() {
    const id = data._id
    taskStore.deleteTask(id)
  }
  
  return (
    <div className="task">
      <div className="task__content">{data.content}</div>
      <div className="actions">
        <Popup 
        model 
        trigger={
            <button>Edit</button>
        }>
        {(close) => <PopupEdit title={"Edit Task"} close={close} id = {data._id}/>}
        </Popup>
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
