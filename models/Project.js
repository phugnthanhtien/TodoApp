import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   }
})

const Project = mongoose.model('Project', projectSchema)

export default Project