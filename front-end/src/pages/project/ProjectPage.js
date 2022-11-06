import PopupEdit from "../../components/popUpedit";
import Popup from "reactjs-popup";
import Project from "../../components/project";
import axios from 'axios'

import classNames from "classnames/bind";
import styles from "./ProjectPage.css";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/projects`)
      .then(res => {
        setProjects(res.data);
      })
      .catch(error => console.log(error));
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
        {projects.map(project => (
          <Project 
          key={project._id} 
          primary 
          data = {project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
