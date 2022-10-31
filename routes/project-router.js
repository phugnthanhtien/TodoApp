import projectController from '../controllers/project-controller.js'
import express from 'express'

const router = express.Router()

router.get('/', projectController.getAllProjects)

router.get('/:id', projectController.getProjectById)

router.post('/', projectController.createProject)

router.patch('/:id', projectController.updateProject)

router.delete('/:id', projectController.deleteProject)

export default router
