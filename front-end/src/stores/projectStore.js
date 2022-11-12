import { makeAutoObservable } from "mobx";
import axios from "../API/axios";

class ProjectStore {
  projects = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  getProject() {
    axios.get('/projects')
    .then(res => {
        this.projects = res.data
    })
    .catch(error => console.log(error));
  }
  addProject(newProject) {
    axios.post('/projects', { name: newProject })
    .then(res => {
      this.projects.push(res.data)
    })
    .catch(error => console.log(error));
  }
}

export default ProjectStore;
