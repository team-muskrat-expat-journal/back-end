# back-end api documentation

Base URL: https://skrat-expat.herokuapp.com/

GET - / - returns welcome message

## Authentication:

GET - /api/auth/test - gets test endpoint from auth route

POST - /api/auth/register - post new registration (username === email ; password)... (returns Authorization header) 

POST - /api/auth/login - post login (returns Authorization Header)

## Users:

GET - /api/users - gets all user profiles

GET - /api/users/:id - gets a user profile of user with ':id'

GET - /api/users/:id/posts - [NOT OPERATIONAL YET] gets all user #:id's posts 

PUT - /api/users/:id - updates user #:id's user profile

DELETE - /api/users/:id - deletes user #:id's user profile

## Journal:

<!-- GET - /api/journal - gets endpoint with dummy journal entry data

GET - /api/journal/test - gets test endpoint form journal route -->

GET - /api/posts - gets all posts

GET - /api/posts/:id - gets a post with ':id'

GET - /api/user/:id/posts - 

PUT - /api/post/:id - updates user #:id's user profile

DELETE - /api/post/:id - deletes post with given :id


### Full Postman documentation (should be continuously updating):

https://documenter.getpostman.com/view/12775150/TVepAU9V
