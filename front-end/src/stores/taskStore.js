import { makeAutoObservable, action } from 'mobx'
import { RootStore } from '.'
import getTasks from '../API/task'
import axios from '../API/axios'


class TaskStore {

  constructor() {
    this.rootStore = RootStore
    makeAutoObservable(this)
  }


  addTask(newTask) {
    // this.taskList.push(newTask)
    axios.post('/tasks', { content: newTask })
  }

  setTaskList(taskList = []) {
    this.taskList = taskList
  }

  fetchTaskList() {
    axios.get('/tasks').then(response => {
      this.taskList = response.data
    })
    
  }
}

export default TaskStore