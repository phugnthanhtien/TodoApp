import taskRouter from './task-router.js'
import userRouter from './user-router.js'
import projectRouter from './project-router'

function route(app) {
    app.use('/tasks', taskRouter)
    app.use('/users', userRouter)
    app.use('/projects', projectRouter)
}

export default route