import ProjectStore from './projectStore'

class RootStore {
    constructor() {
        this.projectStore = new ProjectStore();
    }
}

export const rootStore = new RootStore();