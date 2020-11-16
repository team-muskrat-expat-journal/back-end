const router = require('express').Router()

const Users = require('./userModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the user router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

router.get('/:id', (req,res)=>{ 
    const {id} = req.params
 
    Users.findById(id)
    .then(user => {
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).json({ message:`cannot find user #${id}`})
        }    })
    .catch(error => res.status(500).json({message: error.message, extra: error.stack}))
 })

router.get('/:id/posts', (req,res)=>{ 
    const {id} = req.params
    res.status(200).json({message: `this should be users #${id}'s posts from the database`})
 })

router.put('/:id', (req,res)=>{ 
    const {id} = req.params
    const changes = req.body

    Users.findById(id)
    .then(user =>{
        if(user){
            return Users.updateUser(changes, id)
        } else {
            res.status(404).json({ message: `could not find user #${id}`})
        }
    }).then(updatedScheme => {
        res.json(updatedScheme)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))

 })

router.delete('/:id', (req,res)=>{ 
    const {id} = req.params

    Users.removeUser(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: `user #${id} does not exist in the database`})
        }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
    
 })

module.exports = router