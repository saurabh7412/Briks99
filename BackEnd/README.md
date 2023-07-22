# enormous-library-3081-BackEnd

Routes -
1. UserRoute
2. PostRoute

Endpoints for /user route -
1. /get - to get all the users that have been registered.
2. /register - to register a new user in database.
3. /login - to login the existing user by providing jwt token.
4. /logout - to logout currently logged in user.

Endpoints for /posts route -
1. / - to get all the posts that have been stored in database.
2. /add - to Add a new post in database.
3. /update/:id - to update information of existing post using post id.
4. /delete/:id - to delete an existing post from database using post id.

Note : For /posts route endpoints, the Authentication token is required to access them. Token will be generated during user login.

Searching, Filtering & Pagination - 
1. User can filter houses according to "title", "location" & "price".
   Ex-    /posts/?title=Oakwood&location=angeles&price=3200

2. To search for something the user can use ?q="something" after /posts.
   
3. To apply pagination use ?limit=5&page=2 after /posts.
