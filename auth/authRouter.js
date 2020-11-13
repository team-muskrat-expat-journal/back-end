const router = require('express').Router()

const Journal = require('../journal/journalModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the auth router is running at ' + currentTime})
})

module.exports = router