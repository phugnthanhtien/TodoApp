import { makeAutoObservable, action } from 'mobx'
import { rootStore } from '.'
import getTasks from '../API/task'
import axios from '../API/axios'


class TaskStore {

  taskList

  constructor() {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }


  addTask(input) {
    axios.post('/tasks', { content: input }).then(newTask => {
      this.taskList.push(newTask)
    })
  }

  deleteTask(id) {
    axios.delete(`/tasks/${id}`)
  }

  fetchTaskList() {
    axios.get('/tasks').then(response => {
      this.taskList = response.data
    })
    
  }

  
}

export default TaskStore