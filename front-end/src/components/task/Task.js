import PopupEdit from "../popUpedit";
import Popup from "reactjs-popup";

import "./Task.module.css";

function Task({ content }) {
  return (
    <div className="task">
      <div className="task__content">{content}</div>
      <div className="actions">
        <Popup 
        model 
        trigger={
            <button>Edit</button>
        }>
        {(close) => <PopupEdit title={"Edit Task"} close={close} />}
        </Popup>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Task;
