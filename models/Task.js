import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({ 
    content: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    projectId: {
        type: String,
        require: true,
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task 

