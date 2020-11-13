const router = require('express').Router()

const Journal = require('./journalModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the journal router is running at ' + currentTime})
})

module.exports = router