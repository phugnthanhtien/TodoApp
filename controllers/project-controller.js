import Project from '../models/project.js';

function getAllProjects(req, res) {
    // Project.find((err, data) => {
    //     res.send(JSON.stringify(data))
    // })
    Project.find({})
        .then(projects => {
            res.send(JSON.stringify(projects))
        })
        .catch(err => {
            const message = err.message || "Find project error";
            res.send(message);
        })
}

function getProjectById(req, res) {
    const id = req.params.id
    Project.findById(id)
        .then(foundProject => {
            res.send(JSON.stringify(foundProject))
        })
        .catch(err => {
            const message = err.message || "Find project Id error";
            res.send(message);
        })
}

function createProject(req, res) {
    const project = req.body
    Project.create(project)
        .then(() => {
            res.send(JSON.stringify(project))
        })
        .catch(err => {
            const message = err.message || "Create project error";
            res.send(message);
        })
}

function updateProject(req, res) {
    const id = req.params.id
    Project.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(project => {
            res.end(JSON.stringify(project))
        })
        .catch(err => {
            const message = err.message || "Update project error";
            res.send(message);
        })
}

function deleteProject(req, res) {
    const id = req.params.id
    Project.findByIdAndDelete(id)
      .then(foundProject => {
         res.send(JSON.stringify(foundProject))
      })
      .catch(err => {
         const message = err.message || "Delete project error";
         res.send(message);
      })
}

const projectController = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}

export default projectController