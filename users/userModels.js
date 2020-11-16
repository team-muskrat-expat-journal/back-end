const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    findBy,
    create,
    getAllUsers,
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
    
    async function create(user){
        const [id] = await
        db('users').insert(user)
            return db('users').where({id}).first()
    }

    function getAllUsers(){
        return null
    }

    function updateUser(){
        return null
    }

    function removeUser(){
        return null
    }