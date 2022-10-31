import mongoose from 'mongoose'

const projectUserSchema = new mongoose.Schema({
   userId: {
      type: String,
      require: true,
   },
   projectId: {
      type: String,
      require: true,
   },
   isAdmin: {
      type: Boolean,
      default: false,
   }
})

const projectUser = mongoose.model('Project', projectUserSchema)

export default projectUser