import PopupEdit from "../popUpedit";
import Popup from "reactjs-popup";

import "./Task.module.css";

function Task({ data }) {
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
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Task;
