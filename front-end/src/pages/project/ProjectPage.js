import Popup from "reactjs-popup";

import PopupEdit from "../../components/popUpedit";
import Project from "../../components/project";
import useStores from "../../hooks/useStores.js";
import { observer } from "mobx-react";

import classNames from "classnames/bind";
import styles from "./ProjectPage.css";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function ProjectPage() {
  const { projectStore } = useStores();

  useEffect(() => {
    projectStore.getProject();
  }, []);

  let projects = projectStore.projects;
  const [newProject, setNewProject] = useState("");

  const onCreateProject = () => {
    projectStore.addProject(newProject);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("project-container")}>
        <Popup
          modal
          trigger={<div className={cx("add-button")}>Add Project</div>}
        >
          {(close) => (
            <PopupEdit
              title={"Create Project"}
              close={close}
              onHandle={onCreateProject}
              setNew={setNewProject}
            />
          )}
        </Popup>
        {projects.map((project, index) => (
          <Project key={index} primary data={project} />
        ))}
      </div>
    </div>
  );
}

export default observer(ProjectPage);
