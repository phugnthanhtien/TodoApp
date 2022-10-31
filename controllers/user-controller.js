import jwt from 'jsonwebtoken'
import { insertUser, verifyUser, handleAuthResponse } from "./helper.js"
import authenticate from '../middlewares/authentication.js'
import multer from 'multer'

function signUp(req, res) {
    const user = req.body
    insertUser(user) 
        .then(insertedUser => {
            handleAuthResponse(res, true)
        })
        .catch(error => {
            handleAuthResponse(res, false)
        })
}

function logIn(req, res) {
    const user = req.body
    verifyUser(user)
        .then(foundUser => {
            if (!foundUser) {
                throw new Error('User not found')
            }
            const token = jwt.sign({ userId: foundUser.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
            res.end(JSON.stringify({ token }))
        })
        .catch(err => {
            res.end('User not found')
        })
}

function pingWithAuth(req, res) {
    res.end('Success')
}

function upload(req, res) {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './upload')
        },
        filename: function(erq, file, cb) {
            cb(null, file.originalname)
        }
    })

    res.end('Upload success')
}

const userController = {
    signUp,
    logIn,
    pingWithAuth,
    upload,
}

export default userController