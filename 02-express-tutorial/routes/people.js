const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson
} = require('../services/peopleService')

router.route('/').get(getPeople).post(createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePerson)

module.exports = router