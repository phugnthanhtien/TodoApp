import Popup from "reactjs-popup";
import axios from 'axios'

import PopupEdit from "../../components/popUpedit";
import Project from "../../components/project";
import { ProjectContext } from "./ProjectContext";

import classNames from "classnames/bind";
import styles from "./ProjectPage.css";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);


function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: ''
  })

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/projects`)
      .then(res => {
        setProjects(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  
  const onCreateProject = () => {
    axios.post(`http://127.0.0.1:3001/projects`, { name: newProject })
      .then(res => {})
      .catch(error => console.log(error));
  }

  return (
    <ProjectContext.Provider value={[newProject, setNewProject]}>
      <div className={cx("wrapper")}>
        <div className={cx("project-container")}>
          <Popup
            modal
            trigger={<div className={cx("add-button")}>Add Project</div>}
          >
            {(close) => <PopupEdit title={"Create Project"} close={close} onHandle = {onCreateProject}/>}
          </Popup>
          {projects.map(project => (
            <Project 
            key={project._id} 
            primary 
            data = {project} />
          ))}
        </div>
      </div>
    </ProjectContext.Provider>
  );
}

export default ProjectPage;
