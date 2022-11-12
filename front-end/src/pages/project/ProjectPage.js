import Popup from "reactjs-popup";

import PopupEdit from "../../components/popUpedit";
import Project from "../../components/project";
import { ProjectContext } from "./ProjectContext";
import useStores from '../../hooks/useStores.js';

import classNames from "classnames/bind";
import styles from "./ProjectPage.css";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);


function ProjectPage() {
  // const [projects, setProjects] = useState([]);
  const { projectStore } = useStores();
  const projects = projectStore.projects;
  const [newProject, setNewProject] = useState({
    name: ''
  })
  useEffect(() => {
    projectStore.getProject();
  }, []);

  const onCreateProject = () => {
    projectStore.addProject(newProject);
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
