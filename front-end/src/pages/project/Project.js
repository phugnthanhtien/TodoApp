import PopupEdit from "../../components/popUpedit";
import Popup from "reactjs-popup";

function Project() {
  return (
    <div>
      <Popup modal trigger={<button>Click Me</button>}>
        {close => <PopupEdit title={"Create Project"} close={close} />}
      </Popup>
    </div>
  );
}

export default Project;
