import userController from '../controllers/user-controller.js'
import authenticate from '../middlewares/authentication.js'
import express from 'express'
import multer from 'multer'

const router = express.Router()
const app = express()

router.post('/login', (req, res) => {
    userController.logIn(req, res)
})

router.post('/signup', (req, res) => {
    userController.signUp(req, res)
})

// router.use('/tasks', )

router.get('/ping-with-auth',authenticate, userController.pingWithAuth)


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(erq, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })
router.post('/upload', upload.single('avt'), (req, res) => {
    userController.upload(req, res)
})

export default router