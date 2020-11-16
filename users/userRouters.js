const router = require('express').Router()

const User = require('./userModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the user router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    res.status(200).json({message: "this should be the entire user database"})
 })

router.get('/posts', (req,res)=>{ 
    res.status(200).json({message: "this should be all posts from the entire user database"})
 })

router.get('/:id', (req,res)=>{ 
    const {id} = req.params
    res.status(200).json({message: `this should be a single user with id #${id}`})
 })

router.get('/:id/posts', (req,res)=>{ 
    const {id} = req.params
    res.status(200).json({message: `this should be users #${id}'s posts from the database`})
 })

router.put('/:id', (req,res)=>{ 
    const {id} = req.params
    res.status(200).json({message: `this should edit user #${id}'s information in the database`})
 })

router.delete('/:id', (req,res)=>{ 
    const {id} = req.params
    res.status(200).json({message: `this should delete user #${id} from the database`})
 })

module.exports = router