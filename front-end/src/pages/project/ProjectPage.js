import PopupEdit from "../../components/popUpedit";
import Popup from "reactjs-popup";
import Project from "../../components/project";

import classNames from "classnames/bind";
import styles from "./ProjectPage.module.css";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/tasks")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("project-container")}>
        <Popup
          modal
          trigger={<div className={cx("add-button")}>Add Project</div>}
        >
          {(close) => <PopupEdit title={"Create Project"} close={close} />}
        </Popup>
        <Project primary title="Trick" />
        <Project primary title="Treat" />
      </div>
    </div>
  );
}

export default ProjectPage;
