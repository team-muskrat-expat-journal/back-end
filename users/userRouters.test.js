const request = require('supertest')

const server = require('../server')

describe('userRouter.js', ()=>{
    it('is testing', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('[GET] /', ()=>{
        it('works with supertest', ()=>{
            return request(server).get('/api/users')
                .expect('content-type', /json/)
                .expect('content-length', '153')
                .expect(200)
        })
    })
})