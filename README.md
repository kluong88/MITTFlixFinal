![](https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png)

A movie app that fetches a movie list from a localized API. The movies are sorted by Genre and users are provided with the added functionality to add movies to a watch list and view them on a seperate page and the ability to filter results by search query.

## To start this app

To start this app, you will need to run 2 separate commands.

### `npm run db`

This will start the database so your app actually has movies to query.<br>
The database runs on port `3001` just in case you need that info.

### `npm start`

This starts up the actual app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Using the app

- Movies are automatically loaded to page and sorted by Genre
- Clicking on the (+) icon on the bottom right of a movie poster will add it to a users list as well as marking the movie poster by changing the (+) to a solid red (✓)
- Users can view their list on a seperate page by clicking the 'My List' button
- Search query will search both movie title and overview for query term and filter movies that meet it 
