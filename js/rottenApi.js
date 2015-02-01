/**
 * Interacting with the rotten tomatoes api
 */
var rottenApi = (function(){
	var apiKey = 'x4vbjjacnn28dzap9ervnzb2';
	var apiUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

	return {
		search: function(query, callback) {

			// Build out our query url
			var url = apiUrl + '?apiKey=' + apiKey + '&q=' + query;

			// [same origin policy](http://en.wikipedia.org/wiki/Same-origin_policy)
			// so we use jsonp 
			$.ajax({
				url: url,
				dataType: 'jsonp',
				success: function(response){
					return callback(response.movies);
				}
			});
		}
	};
})();

