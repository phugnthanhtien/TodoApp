import { makeAutoObservable } from 'mobx';
import RootStore from './index'

class ProjectStore{
    projects = [];
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }
    addProject(newProject) {
        this.projects.push(newProject);
    }
}

export default ProjectStore;