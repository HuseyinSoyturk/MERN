const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const title = req.body.title

    const newUser = new User({ title })

    newUser.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router