/**
 * Any handling related to the search form
 */
var searchForm = (function() {
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
