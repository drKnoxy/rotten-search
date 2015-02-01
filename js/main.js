/**
 * Controller, and on-ready handling
 */
$(function(){

	// Watch the search form
	searchForm.submit(function(query) {

		// Take the query and send it off to the api
		rottenApi.search(query, function(movies) {

			// Update the movie list
			movieList.newList(movies);

			// Hide Search

			// Show back to search link
		});
	});
});
