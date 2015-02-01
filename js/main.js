
var rottenApi = {
	apiKey: 'x4vbjjacnn28dzap9ervnzb2',
	apiUrl: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
	search: function(query, callback) {

		// Build out our query url
		var url = this.apiUrl + '?apiKey=' + this.apiKey + '&q=' + query;

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
}

var movieList = (function(){
	var tmplSelector = '.js-movie-list';
	var movies = [];
	var tmpl = '<li class="movie-list__item"><img src="{img}" class="movie-list__img"></li>';

	var newList = function(movies) {
		var html;

		// Update our cache
		movies = movies;

		// Turn the json into html
		html = createTemplate(movies);

		// Update our html in the dom
		tmplHtml(html);

		// Reset counters and handlers

	}

	var createTemplate = function(movies) {
		var html = '';
		
		$.each(movies, function(i,movie){
			var data = {
				img: movie.posters.detailed.replace('_tmb', '_ori')
			};

			html += tmplEngine(tmpl, data);
		});

		return html;
	}
	
	var tmplEngine = function(tmpl, data) {
		var re = /{([^}]+)?}/g;
		while(match = re.exec(tmpl)) {
			tmpl = tmpl.replace(match[0], data[ match[1] ]);
		}
		return tmpl;
	}

	var tmplHtml = function(html) {
		$(tmplSelector).html(html);
	}

	return {
		movies: movies,
		newList: newList
	};
})();

var searchForm = (function(){
	var searchSelector = '.js-search-form';
	var submit = function(callback) {
		$('.js-search-form').submit(function(e){
			e.preventDefault();

			// Grab the query, and hand it off
			var $this = $(this);
			var query = $this.find('.js-search-query').val();
			callback(query);
		})
	}

	return {
		submit: submit
	}
})();

// Fire it up
$(function(){

	// Watch the search form
	searchForm.submit(function(query) {

		// Take the query and send it off to the api
		rottenApi.search(query, function(movies) {

			// Update the movie list
			movieList.newList(movies);

			// Hide Search

			// Show back to search link
		})
	})
});
