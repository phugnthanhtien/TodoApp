import taskController from '../controllers/task-controller.js'
import express from 'express'

const router = express.Router()

router.get('/', taskController.getAllTasks)

router.get('/:id', taskController.getTaskById)

router.post('/', taskController.createTask)

router.patch('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)

export default router
