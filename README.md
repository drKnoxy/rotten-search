# Rotten Search

I got a developer test from a company I was applying to.
I thought it was a pretty fun, and offered up the opportunity
to show my expertise in a public forum. To check out this project
fire up a local server in the root of the project ie. `php -Slocalhost:3000`.

*JavaScript Know-How*
* Querrying a third party api via AJAX and jsonp
* Running json through a templating engine
* I opted to use the _Revealing Module Pattern_
* Regex
* jQuery usage

*CSS Know-How*
* Font embedding
* Normalizing styles
* `box-sizing` usage, and implementation best practices
* I haven't used the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) style for CSS before, so I thought I'd give it a shot here

*General*
* Code organization
* Using a local server


## Criteria

Assets that this exercise is based on are located in the `reference` directory.

1. Create an app using the provided design assets. Try to make the website look as close to the PSD as possible
1. Make the website responsive for mobile
1. Embed font faces in the website that were used in the PSD. [ComicNeue](http://comicneue.com/)
1. Use the Rotten Tomatoes API to pull in movies that match the user’s query
1. After the JavaScript has loaded the photos from the API, hide the search form and animate the movies onto the screen
1. The user should be able to click a movie, which will animate a card flip to show details on the back of the movie. These details should include: title, year, rating, critical consensus, and abridged cast
1. Allow the user to scroll and see more movies by clicking on a right arrow.  After user has begun scrolling, make left arrow visible
1. Allow user to go back to search input and perform another movie search
