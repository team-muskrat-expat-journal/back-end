const Journal = require('./journalModels')

const db = require('../data/db-config')

beforeEach(async ()=>{
    await db('journal').truncate()
})

describe('journalModel.js', ()=>{
    it('is testing', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('getAllPosts()', ()=>{
        it('gets an empty array', async ()=> {
            const journal = await Journal.getAllPosts()
            expect(journal).toEqual([])
            expect(journal).toHaveLength(0)
        })

        it('gets all the posts', async ()=>{
            await db('journal').insert({
                user_id: "1",
			tripname: "muskrat stew festival",
			rating: 5,
			location: "cambridge, MD",
			date: "2/29/2020",
			notes: "best muskrat in America",
			role: "thing",
			imageURL: "https://visitdorchester.org/wp-content/uploads/CrawfishBoilMuskratStewFest_Feb2017-4880_JimDuffy_800x600.jpg"
			})
            let journal = await Journal.getAllPosts()
            expect(journal).toHaveLength(1)

        })
    })
})
