import User from "../models/user.js";



function insertUser(newUser) {
    return User.create(newUser)
}

function verifyUser(inputUser) {
    return User.findOne(inputUser)
}


function handleAuthResponse(res, isSuccessful) {
    const data = {
        status: isSuccessful ? 'Success' : 'Fail'
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}

export { insertUser, verifyUser, handleAuthResponse }