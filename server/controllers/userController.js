const User = require("../models//UserModels");

const createUser = ((req, res) => {
        User.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const getUsers = ((req, res) => {
    User.findOne({ id_user: req.params.id_user})
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg:  error}))
})

module.exports = {
    createUser,
    getUsers
}