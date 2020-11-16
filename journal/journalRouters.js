const router = require('express').Router()

const Journal = require('./journalModels')

let jEntry = [
    {
        title: "muskrat stew festival",
        date: "2/29/2020",
        location: "Cambridge, MD",
        image_url: "https://visitdorchester.org/wp-content/uploads/CrawfishBoilMuskratStewFest_Feb2017-4880_JimDuffy_800x600.jpg",
        notes: "best place in America to eat muskrat. Occurs once a year; enter the leg eating championship.",
        rating: 5,
        category: "thing"
    },
    {
        title: "Gillett Coon Supper",
        date: "1/14/2020",
        location: "Jonesboro, AR",
        image_url: "https://static-13.sinclairstoryline.com/resources/media/7cddab01-42de-4133-b9bd-11e390d7f6ea-large16x9_coonsupper.JPG?1547354263146",
        notes: "best place to eat raccoon in America, be prepared to talk local Arkansas politics",
        rating: 5,
        category: "thing"
    },
    {
        title: "the Roadkill Cookoff",
        date: "10/3/2015",
        location: "Marlinton, WV",
        image_url: "https://images.vice.com/munchies/wp_upload/IMG_0858.jpg?resize=400:*",
        notes: "there was no roadkill to eat here, i think i ate a hs science class' rabbit",
        rating: 2,
        category: "thing",
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