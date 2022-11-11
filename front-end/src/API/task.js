import axios from './axios'

function getTasks() {

  axios.get('/tasks').then(response => {
    //console.log(response.data)
    return response.data
  })
}

export default getTasks