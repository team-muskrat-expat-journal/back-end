const User = require('./userModels')

const db = require('../data/db-config')

beforeEach(async ()=>{
    await db('users').truncate()
})

describe('userModel.js', ()=>{
    it('is testing', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('find()', ()=>{
        it('gets an empty array', async ()=> {
            const users = await User.find()
            expect(users).toEqual([])
            expect(users).toHaveLength(0)
        })
        it('gets all the users', async ()=>{
            await db('users').insert({email: 'ironic@arabic.com', password: '123456'})
            let users = await User.find()
            expect(users).toHaveLength(1)

            await db('users').insert({email: 'the@new.cal', password: '123456'})
            users = await User.find()
            expect(users).toHaveLength(2)
        })
    })
})