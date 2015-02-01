/**
 * Interactions, methods, etc related to our movie list
 */
var movieList = (function() {
	var tmplSelector = '.js-movie-list';
	var movies = [];
	var tmpl = '<li class="movie-list__item"><img src="{img}" class="movie-list__img"></li>';

	var newList = function(newMovies) {
		var html;

		// Update our cache
		movies = newMovies;

		// Turn the json into html
		html = createTemplate(movies);

		// Update our html in the dom
		tmplHtml(html);

		// Reset counters and handlers
		updateListWidth();
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

		// Hunting for variables to replace in our template
		// named like {img}
		var re = /{([^}]+)?}/g;
		while(match = re.exec(tmpl)) {
			tmpl = tmpl.replace(match[0], data[ match[1] ]);
		}
		return tmpl;
	}

	var tmplHtml = function(html) {
		$(tmplSelector).html(html);
	}

	var updateListWidth = function() {
		var $li = $(tmplSelector).find('li');
		var includeMargin = true;
		var oWidth = $li.outerWidth(includeMargin);
		var newWidth = movies.length * oWidth;
		$(tmplSelector).css('width',newWidth);
	}

	return {
		movies: movies,
		newList: newList
	};
})();
