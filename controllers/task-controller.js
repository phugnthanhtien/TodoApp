import Task from '../models/task.js';

function getAllTasks(req, res) {
    Task.find((err, data) => {
        res.send(JSON.stringify(data))
    })
}

function getTaskById(req, res) {
    const id = req.params.id
    Task.findById(id, ((err, data) => {
        res.send(JSON.stringify(data))
    }))
}

function createTask(req, res) {
    const task = req.body
    Task.create(task)
    res.send(JSON.stringify(task))
}

function updateTask(req, res) {
    const id = req.params.id
    Task.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, data) => {  
        res.end(JSON.stringify(data))
    })
}

function deleteTask(req, res) {
    const id = req.params.id
    Task.findByIdAndDelete(id, (err, data) => {
        res.end('Delete success')
    })
    
}

const taskController = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}

export default taskController