const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const authRouter = require('./auth/authRouter')
const journalRouter = require('./journal/journalRouters')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/journal', journalRouter)

module.exports = server