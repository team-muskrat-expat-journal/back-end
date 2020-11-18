const db = require('../data/db-config')

module.exports = {
    //function names:
    getAllPosts,
	getPostByID,
	getPostsByUserID,
	addPost,
	updatePost,
	deletePost,
}

    //functions:

    // GET Requests
    function getAllPosts(){
        return db('journal')
    }
    function getPostByID(id){
        return db('journal').where({ id })
    }
    function getPostsByUserID(userID){
        return db('journal').where({ user_id: userID})
    }

    // POST Requests
    function addPost(post) {
        return db('journal')
            .insert(post)
            .returning('id')
            .then((ids) => {
                const id = ids[0]

                return getPostByID(id)
            });
    }

    // PUT Request / update posts
    function updatePost(id, changes) {
        return db('journal')
            .where({ id })
            .update(changes)
            .then(() => {
                return getPostByID(id)
            });
    }

    // DELETE Request
    function deletePost(id) {
        return db('journal').where({ id }).del()
    }
