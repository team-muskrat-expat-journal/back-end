const bcrypt = require('bcryptjs')
const router = require('express').Router()

const Users = require('../users/userModels')
const Journal = require('../journal/journalModels')

const {isValid} = require('../users/userService')
const {jwtSecret} = require('./secret')

const jwt = require('jsonwebtoken')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the auth router is running at ' + currentTime})
})

router.post('/register', async (req,res)=>{ 
    const credentials = req.body

    if(isValid(credentials)){
        const rounds = process.env.BCRYPT_ROUNDS || 8

        const hash = bcrypt.hashSync(credentials.password, rounds)

        credentials.password = hash
        console.log("creds:", credentials)
        Users.create(credentials)
        .then(user => {
            console.log("user", user)
            res.status(201).json({data:user})
        })
        .catch(error => res.status(500).json({message: error.message, extra: error.stack}))
    } else {
        res.status(400).json({
          message: "provide alphanumeric username and password"
        })
    }
})

router.post('/login', (req,res)=>{ 
    const {email, password} = req.body

    if(isValid(req.body)) {
        Users.findBy({email})
        .then(([user])=>{
            if(user && bcrypt.compareSync(password, user.password)){
                const token = makeToken(user)
                res.status(200).json({message: `welcome ${user.email}`, token})
            } else {
                res.status(401).json({message: 'invalid credentials'})
            }
        })
        .catch(error =>{
            res.status(500).json({message: `${error.message}`})
        })
    } else {
        res.status(400).json({message: 'please provide valid u/p'})
    }
})

function makeToken(user){
    const payload = {
        subject: user.id,
        email: user.email
    }
    const options = {
        expiresIn: '1 hour'
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router