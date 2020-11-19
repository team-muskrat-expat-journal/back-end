const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    findBy,
    create,
    findById,
    updateUser,
    removeUser,
}

    //functions:
    function find(){
        return db('users')
    }
    
    function findBy(filter){
        return db('users').where(filter).orderBy('id')
    }

    function findById(id){
        return db('users').where({id}).first()
    }
    
    async function create(user){
        const [id] = await 
        db('users').insert(user, "id")
            return db('users').where({id}).first()
    }

    async function updateUser(changes, id){
        const count = await db('users').where({id}).update(changes)
        if (count){
            return db('users').where({id}).first()
        } else {
            return Promise.resolve(null)
        }
    }

    async function removeUser(id){
        const user = await db('users').where({id}).first()
        if(!user){
            return Promise.resolve(null)
        } else {
            await db('users')
            .where({id})
            .del()
            return Promise.resolve(user)
        }
    }