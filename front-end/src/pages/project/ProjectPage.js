import PopupEdit from "../../components/popUpedit";
import Popup from "reactjs-popup";
import Project from "../../components/project";

import classNames from "classnames/bind";
import styles from "./ProjectPage.module.css";
const cx = classNames.bind(styles);

function ProjectPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("project-container")}>
        <Popup modal trigger={<div className= {cx("add-button")}>Add Project</div>} >
          {(close) => <PopupEdit title={"Create Project"} close={close} />}
        </Popup>
        <Project primary title="Trick" />
        <Project primary title="Treat" />
      </div>
    </div>
  );
}

export default ProjectPage;
