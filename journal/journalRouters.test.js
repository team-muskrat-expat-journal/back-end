const request = require('supertest')

const server = require('../server')

describe('journalRouter.js', ()=>{
    it('is testing', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('[GET] /', ()=>{
        it('works with supertest', ()=>{
            return request(server).get('/api/journal')
                .expect('content-type', /json/)
                .expect('content-length', '961')
                .expect(200)
        })
    })
})