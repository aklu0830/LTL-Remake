const {User} = require('../models/user.model')

module.exports.testMsg = (req,res) => {
    User.find()
        .then(result=>res.json({users: result}))
        .catch(err=>res.json({error: err}))
}