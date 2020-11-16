const router = require('express').Router()

const Journal = require('./journalModels')

let jEntry = [
    {
        title: "muskrat stew festival",
        tagline: "best place to eat muskrat in America",
        location: "Cambridge, MD",
        rating: 5,
        notes: "occurs once a year; enter the leg eating championship."
    },
    {
        title: "Gillett Coon Supper",
        tagline: "best place to eat raccoon in America",
        location: "Jonesboro, AR",
        rating: 5,
        notes: "be prepared to talk local Arkansas politics"
    },
    {
        title: "the Roadkill Cookoff",
        tagline: "there was no roadkill to eat here",
        location: "Marlinton, WV",
        rating: 2,
        notes: "no roadkill, i think i ate a hs science class' rabbit"
    }
]

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the journal router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    res.status(200).json(jEntry)
 })

module.exports = router