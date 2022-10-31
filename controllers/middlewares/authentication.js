import jwt from 'jsonwebtoken'
import User from '../models/user.js'

function authenticate(req, res, next) {
    try {
        if (!req.headers['authorization']) {
            throw new Error('Invalid token')
        }
        const token = req.headers['authorization'].split(' ')[1]
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        const userId = decodedToken.userId   // { userId } = decodedToken
        
        User.findById(userId).then(foundUser => {
            if (!foundUser) {
                throw new Error('Invalid token')
            }
        })
        next();
    }
    catch(err) {
        res.end(err)
    }
}

export default authenticate