import { makeAutoObservable, action } from 'mobx'
import { rootStore } from '.'
import getTasks from '../API/task'
import axios from '../API/axios'


class TaskStore {
  tasks = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.loadTasks()
  }

  loadTasks() {
    axios.get('/tasks').then(response => {
      this.tasks = []
      response.data.map(task => this.tasks.push(task))
    })
  }

  createTask(input) {
    axios.post('/tasks', { content: input }).then(newTask => {
      this.tasks.push(newTask)
    })
  }

  deleteTask(id) {
    axios.delete(`/tasks/${id}`)
  }

}

export default TaskStore