import taskRouter from './task-router.js'
import userRouter from './user-router.js'
import projectRouter from './project-router.js'

function route(app) {
    app.use('/tasks', taskRouter)
    app.use('/users', userRouter)
    app.use('/projects', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        next();
        }, projectRouter)
}

export default route