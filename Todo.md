[]You will need 2 views for the Base Features
thought?

[]create favorites table
[]category id 
[] url / path
[]optional display by category name 

database layout 

2 tables

table 1 category 
 

 table 2 favorites 
update favorite with category id




Route: Search
[] "Click favorite image to save! 🥴" header
[] input and submit button
[] connect to giphy search endpoint
[] display giphy search results

[] on click of giphy, save url to favorites table in db
    [] alert user that they are about to favorite the selected giphy
    [] server side favorite.router.js (post)

Route: Favorites
[] display all saved giphys from favorite table (get)
    [] server side favorite.router.js get
[] assign category to any favorite (put)
    [] dropdown menu attached to each giphy with category options and save button
    [] server side favorite.router.js put




how to display category name with picture  

Q: how to display category name by picture after you assign category to it

favorited picture will have category_id

and category table has a category.id

favorited.category_id = category.id

category.name???

^Nvm lol :D

