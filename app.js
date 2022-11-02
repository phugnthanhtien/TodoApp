import express from 'express'
import multer from 'multer'
import mongoose from 'mongoose'
import route from './routes/index.js'


const app = express()
const hostname = '127.0.0.1'
const port = 3001

app.use(express.json())
app.use(express.text())

route(app)


mongoose.connect('mongodb+srv://vuhoanganh1821:hoanganh2003@hoanganh.8ggeftx.mongodb.net/todoapp')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connect to MongoDB')
})

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})


// Set storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(erq, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

app.post('/upload', upload.single('avt'), (req, res) => {
    console.log(req.file)
    res.send('Upload success')
})