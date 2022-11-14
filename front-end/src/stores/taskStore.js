import { makeAutoObservable } from 'mobx'
import axios from '../API/axios'


class TaskStore {
  tasks = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.loadTasks()
  }

  loadTasks() {
    axios.get('/tasks').then(res => {
      this.tasks = res.data
    })
  }

  createTask(input) {
    axios.post('/tasks', { content: input }).then(res => {
      this.tasks.push(res.data)
    })
  }

  deleteTask(id) {
    let key
    console.log(id)
    axios.delete(`/tasks/${id}`)
    this.tasks.forEach((task, index) => {
      if (task._id = id)
        key = index
    })
    console.log(key)
    this.tasks.splice(key, 1)
  }

}

export default TaskStore