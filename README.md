# back-end api documentation

Base URL: https://skrat-expat.herokuapp.com/

GET - / - returns welcome message

## Authentication:

GET - /api/auth/test - gets test endpoint from auth route

POST - /api/auth/register - post new registration (username === email ; password)... (returns Authorization header) 

POST - /api/auth/login - post login (returns Authorization Header)

## Journal:

GET - /api/journal - gets endpoint with dummy journal entry data

GET - /api/journal/test - gets test endpoint form journal route


### Full Postman documentation (should be continuously updating):

https://documenter.getpostman.com/view/12775150/TVepAU9V
